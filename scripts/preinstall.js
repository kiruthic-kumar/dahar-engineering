const { unlinkSync, existsSync } = require('node:fs');

for (const name of ['package-lock.json', 'yarn.lock']) {
  if (existsSync(name)) {
    try {
      unlinkSync(name);
    } catch {
      // ignore failures
    }
  }
}

const userAgent = process.env.npm_config_user_agent || '';
if (!userAgent.startsWith('pnpm/')) {
  console.error('Use pnpm instead');
  process.exit(1);
}
