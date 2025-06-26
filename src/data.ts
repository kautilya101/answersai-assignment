export const variableCategories = [
  {
    id: 'variable-category-1',
    name: 'Variable category 1',
    variables: [
      {
        id: 'carbon1',
        name: 'Carbon 1',
        active: true,
        description:
          'Indicates the base carbon emissions associated with a specific system or region. Useful for baseline comparison and sustainability planning.'
      },
      {
        id: 'co2Distribution',
        name: 'Co2 Distribution',
        active: true,
        description:
          'Visualizes how carbon dioxide emissions are distributed across different sources or sectors. Helps identify emission hotspots.'
      },
      {
        id: 'fleetSizing',
        name: 'Fleet sizing',
        active: false,
        description:
          'Determines the optimal number of vehicles required to meet service demand. Affects cost, efficiency, and service reliability.'
      }
    ]
  },
  {
    id: 'variable-category-2',
    name: 'Variable Category 2',
    variables: [
      {
        id: 'parkingRate',
        name: 'Parking Rate',
        active: false,
        description:
          'Specifies the cost or availability of parking spaces in a given area. Impacts vehicle dwell time and accessibility.'
      },
      {
        id: 'borderRate',
        name: 'Border Rate',
        active: true,
        description:
          'Applies additional constraints or costs when crossing jurisdictional borders. Useful in regional planning and toll calculations.'
      },
      {
        id: 'requestRate',
        name: 'Request rate',
        active: false,
        description:
          'Tracks how often service or ride requests occur in a given time. Influences dispatching, load balancing, and scaling.'
      },
      {
        id: 'variable1a',
        name: 'Variable 1',
        active: false,
        description:
          'Custom-defined metric for project-specific analysis. Can represent environmental, economic, or behavioral data.'
      },
      {
        id: 'variable1b',
        name: 'Variable 1',
        active: true,
        description:
          'A configurable placeholder used for testing or modeling assumptions. Not tied to a standard metric.'
      },
      {
        id: 'variable1c',
        name: 'Variable 1',
        active: true,
        description:
          'Another flexible variable for prototype evaluations or advanced simulations. Adaptable to evolving project needs.'
      }
    ]
  },
  {
    id: 'variable-category-3',
    name: 'Variable Category 3',
    variables: [
      {
        id: 'variable1d',
        name: 'Variable 1',
        active: false,
        description:
          'Reserved for future integration of custom data streams. Can be linked to new sources as the model expands.'
      },
      {
        id: 'variable1e',
        name: 'Variable 1',
        active: true,
        description:
          'Supports specialized input for niche use cases. Enables deeper insights in domain-specific analysis.'
      },
      {
        id: 'variable1f',
        name: 'Variable 1',
        active: true,
        description:
          'Represents user-defined variables critical for scenario testing. Useful for tailoring outputs to specific goals.'
      }
    ]
  }
];

export const chartData = [
  { month: 'Apr', value: 25000, unsatisfiedDemand: 15 },
  { month: 'May', value: 45000, unsatisfiedDemand: 25 },
  { month: 'Jun', value: 42000, unsatisfiedDemand: 20 },
  { month: 'Jul', value: 89600, unsatisfiedDemand: 5 },
  { month: 'Aug', value: 58000, unsatisfiedDemand: 18 },
  { month: 'Sep', value: 35000, unsatisfiedDemand: 30 },
  { month: 'Oct', value: 52000, unsatisfiedDemand: 22 }
];

export const kpis = [
  {
    heading: "Infrastructure Units",
    value: "€421.07",
    description: "This describes variable two and what the shown data means.",
  },
  {
    heading: "Charging Growth",
    value: "33.07",
    description: "This describes variable two and what the shown data means.",
  },
  {
    heading: "Localization change",
    value: "21.9%",
    description: "This describes variable two and what the shown data means.",
  },
  {
    heading: "Fleet growth",
    value: "7.03%",
    description: "This describes variable two and what the shown data means.",
  },
];
