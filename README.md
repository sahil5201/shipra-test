## Shipra - Front-end Task

### [Requirements](https://docs.google.com/document/d/1BknVk5FSQ6LeFBsvYl3eYATV_1i3j2OAeaQihC1EoSQ/edit?usp=drivesdk)

### Packages Used

- **TanStack Query** – For data fetching, caching, and synchronization.
- **Axios** – For making HTTP requests.

## Components

This project maintains a modular and well-organized `components/` directory, designed for scalability and maintainability.
Below is a high-level overview of its structure and responsibilities:

### Component Categories

- `charts/`
Contains larger chart components like large-chart.tsx, useful for data visualization in dashboards or reports.

- `common/`
Shared utility components such as error boundaries, skeleton loaders, progress bars, heat maps, and trend indicators.

- `layout/`
Handles global UI layout elements including headers, navbars, and link wrappers.

- `performance/`
Split into peak-data/ and trends/, this section contains both grid and list views for displaying time-series performance data.

- `providers/`
Contains application-level providers such as query-provider.tsx for data fetching and caching logic.

- `statistics/`
Organized into dma/, high-low-statistics/, and overview/, this directory holds various statistical visualization and calculation components.

- `table/`
Components for rendering data tables and toggleable list views.

- `ui/`
A reusable UI library for building consistent interfaces: buttons, cards, tables, badges, tabs, scroll areas, and skeletons.

#

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Sahil Patel
