const { execSync } = require('node:child_process');

function run(cmd) {
  execSync(cmd, { stdio: 'inherit' });
}

run('pnpm install --frozen-lockfile');
run('pnpm --filter db push');
