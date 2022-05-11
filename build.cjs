/**
 * Some codes borrowed from @syafiq
 */
const project = require("./package.json");
const fs = require("fs-extra");
const cmd = require("child_process");
const archiver = require("archiver");
const format = require("date-fns/format");

class Build {
  buildFilename;
  buildOutput;
  buildPacker;
  enviroment;

  constructor() {
    console.log("\n");
    if (process.argv.indexOf("-production") !== -1) {
      this.enviroment = "production";
    } else if (process.argv.indexOf("-staging") !== -1) {
      this.enviroment = "staging";
    } else if (process.argv.indexOf("-development") !== -1) {
      this.enviroment = "development";
    } else {
      throw Error("Missing enviroment argrument. Try 'npm run build -- -<enviroment>'");
    }

    this.buildFilename = `${project.name}-${this.enviroment}-${format(new Date(), "yyyyMMdd-HHmmss")}.zip`;
    this.buildOutput = fs.createWriteStream(`./release/${this.buildFilename}`);
    this.buildPacker = archiver("zip", { zlib: { level: 9 } });

    this.preparation();
    this.execute();
    this.copy();
    this.pack();
  }

  preparation() {
    console.log("Preparing...\n");
    fs.removeSync(".next");
    fs.removeSync("build");

    try {
      switch (this.enviroment) {
        case "production":
          fs.copySync("./env/.env.production", "./.env.production");
          break;
        case "staging":
          fs.copySync("./env/.env.staging", "./.env.production");
          break;
        default:
          fs.copySync(".env", "./.env.production");
      }
    } catch (error) {
      throw Error(`Enviroment configuration for ${this.enviroment} not found!`);
    }
  }

  execute() {
    console.log("Building...\n");
    cmd.execSync("npm run build");
  }

  copy() {
    console.log("Copy required files...\n");
    fs.copySync("package.json", "build/dist/package.json");
    fs.copySync(".next", "build/dist/.next");
    fs.copySync("public", "build/dist/public");
    fs.moveSync(".env.production", "build/dist/.env.production");
  }

  move() {
    console.log("Move build file...\n");
    fs.moveSync(`./${this.buildFilename}`, `./release/${this.buildFilename}`);
    console.log("Completed\n");
  }

  output(error) {
    if (error.code === "ENOENT") {
      console.warn(error.message);
    } else {
      throw err;
    }
  }

  pack() {
    // this.buildOutput.on("close", () => this.move());
    this.buildPacker.on("warning", (e) => this.output(e));
    this.buildPacker.on("error", (e) => this.output(e));
    this.buildPacker.pipe(this.buildOutput);
    this.buildPacker.directory("build/dist", false);
    this.buildPacker.finalize();
  }
}

new Build();
