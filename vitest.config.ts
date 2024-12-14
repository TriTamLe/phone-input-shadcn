import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: '.vitest/setup.ts',
      include: ['**/*.test.{ts,tsx}'],
      coverage: {
        provider: 'istanbul',
        include: [
          'src/components/**/*',
          'src/hooks/**/*',
          'src/utils/**/*',
          'src/pages/**/*',
          'src/contexts/**/*',
        ],
        exclude: [
          'src/**/*.d.ts',
          'src/**/*.test.{ts,tsx}',
          'src/components/ui/**/*',
        ],
      },
    },
  })
)
