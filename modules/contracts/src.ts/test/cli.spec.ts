import { fund } from "../commands/fund";
import { migrate } from "../commands/migrate";
import { newToken } from "../commands/new-token";

import { expect, provider } from "./utils";

const addressBookPath = "/tmp/address-book.json";

describe("CLI", () => {
  const wallets = provider.getWallets();

  it("has a 'fund' command that runs without error", async () => {
    const done = fund(wallets[0], wallets[1].address, "1");
    await expect(done).to.be.fulfilled;
  });

  it("has a 'migrate' command that runs without error", async () => {
    const done = migrate(wallets[0], addressBookPath);
    return expect(done).to.be.fulfilled;
  });

  it("has a 'new-token' command that runs without error", async () => {
    const done = newToken(wallets[0], addressBookPath);
    return expect(done).to.be.fulfilled;
  });

});