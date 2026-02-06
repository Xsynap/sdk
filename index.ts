import { decide } from "./decision.js";
import { remember } from "./memory.js";

export async function runAgent() {
  const action = decide();
  remember(action);
}
