import fs from "fs";

export function remember(event: any) {
  fs.appendFileSync(
    "./memory/state.json",
    JSON.stringify(event) + "\n"
  );
}
