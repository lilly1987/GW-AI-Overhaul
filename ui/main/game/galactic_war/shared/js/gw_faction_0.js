// !LOCNS:galactic_war
define([], function () {
  return {
    name: 'Legonis Machina',
    color: [[0, 176, 255], [192, 192, 192]],
    teams: [
      {
        name: 'Kohr - Legonis Machina',
        boss: {
          name: 'Imperator Invictus',
          character: 'Legion',
          econ_rate: 1.75,
          copies: 3,
          landing_policy: ['off_player_planet', 'on_player_planet', 'no_restriction'],
          personality: {
            percent_vehicle: 0.45,
            percent_bot: 0.25,
            percent_air: 0.2,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            metal_drain_check: 0.54,
            energy_drain_check: 0.65,
            metal_demand_check: 0.71,
            energy_demand_check: 0.8,
            micro_type: 2,
            go_for_the_kill: true,
            neural_data_mod: 1,
            adv_eco_mod: 1,
            adv_eco_mod_alone: 0,
            fabber_to_factory_ratio_basic: 2,
            fabber_to_factory_ratio_advanced: 2,
            fabber_alone_on_planet_mod: 3,
            basic_to_advanced_factory_ratio: 0,
            factory_alone_on_planet_mod: 0.5,
            min_basic_fabbers: 5,
            min_advanced_fabbers: 1
          },
          commander: '/pa/units/commanders/imperial_invictus/imperial_invictus.json',
        },
        bossCard: 'gwc_start_artillery',
        systemDescription: "!LOC:The goal of the Legionis Machina is simple--conquest. Invictus is the designated ruler of the galaxy, and any commanders disobeying this directive are faulty.",
        systemTemplate: {
          name: 'Kohr',
          Planets: [
            {
              name: 'Kohr Prime',
              starting_planet: true,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [700, 700],
              Height: [20, 25],
              Water: [40, 50],
              Temp: [0, 100],
              MetalDensity: [50, 70],
              MetalClusters: [25, 49],
              BiomeScale: [100, 100],
              Position: [-47500, 0],
              Velocity: [0, -294.3776],
              Biomes: ['earth']
            },
            {
              name: 'Kohr Beta',
              starting_planet: true,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [700, 700],
              Height: [5, 15],
              Water: [0, 0],
              Temp: [0, 0],
              MetalDensity: [50, 70],
              MetalClusters: [25, 49],
              BiomeScale: [100, 100],
              Position: [-32500, 0],
              Velocity: [0, -70.7708],
              Biomes: ['moon']
            },
            {
              name: 'Kohr Gamma',
              starting_planet: false,
              mass: 50000,
              Thrust: [0, 0],
              Radius: [1500, 1500],
              Height: [0, 0],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [0, 0],
              MetalClusters: [0, 0],
              BiomeScale: [0, 0],
              Position: [-40000, 0],
              Velocity: [0, -111.8034],
              Biomes: ['gas']
            }
          ]
        }
      },
      {
        name: 'Entara - Legonis Machina',
        boss: {
          name: 'Imperator Invictus',
          character: 'Legion',
          econ_rate: 1.75,
          copies: 3,
          landing_policy: ['off_player_planet', 'on_player_planet', 'no_restriction'],
          personality: {
            percent_vehicle: 0.45,
            percent_bot: 0.25,
            percent_air: 0.2,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            metal_drain_check: 0.54,
            energy_drain_check: 0.65,
            metal_demand_check: 0.71,
            energy_demand_check: 0.8,
            micro_type: 2,
            go_for_the_kill: true,
            neural_data_mod: 1,
            adv_eco_mod: 1,
            adv_eco_mod_alone: 0,
            fabber_to_factory_ratio_basic: 2,
            fabber_to_factory_ratio_advanced: 2,
            fabber_alone_on_planet_mod: 3,
            basic_to_advanced_factory_ratio: 0,
            factory_alone_on_planet_mod: 0.5,
            min_basic_fabbers: 5,
            min_advanced_fabbers: 1
          },
          commander: '/pa/units/commanders/imperial_invictus/imperial_invictus.json'
        },
        bossCard: 'gwc_start_combatcdr',
        systemDescription: "!LOC:When Invictus reactivated, his memory was more whole than most commanders. This is where his assertion of his right to rule came from. That may or may not be true, but what is true is that Invictus knows more about the origin of the commanders than he cares to tell his compatriots.",
        systemTemplate: {
          name: 'Entara - Legonis Machina',
          Planets: [
            {
              name: 'Entara  Prime',
              starting_planet: true,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [700, 700],
              Height: [20, 25],
              Water: [40, 50],
              Temp: [0, 100],
              MetalDensity: [50, 70],
              MetalClusters: [25, 49],
              BiomeScale: [100, 100],
              Position: [-47500, 0],
              Velocity: [0, -294.3776],
              Biomes: ['earth']
            },
            {
              name: 'Entara Beta',
              starting_planet: true,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [700, 700],
              Height: [5, 15],
              Water: [0, 0],
              Temp: [0, 0],
              MetalDensity: [50, 70],
              MetalClusters: [25, 49],
              BiomeScale: [100, 100],
              Position: [-32500, 0],
              Velocity: [0, -70.7708],
              Biomes: ['moon']
            },
            {
              name: 'Entara Gamma',
              starting_planet: false,
              mass: 50000,
              Thrust: [0, 0],
              Radius: [1500, 1500],
              Height: [0, 0],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [0, 0],
              MetalClusters: [0, 0],
              BiomeScale: [0, 0],
              Position: [-40000, 0],
              Velocity: [0, -111.8034],
              Biomes: ['gas']
            }
          ]
        }
      },
      {
        name: 'Agoge - Legonis Machina',
        boss: {
          name: 'Imperator Invictus',
          character: 'Legion',
          econ_rate: 1.75,
          copies: 3,
          landing_policy: ['off_player_planet', 'on_player_planet', 'no_restriction'],
          personality: {
            percent_vehicle: 0.45,
            percent_bot: 0.25,
            percent_air: 0.2,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            metal_drain_check: 0.54,
            energy_drain_check: 0.65,
            metal_demand_check: 0.71,
            energy_demand_check: 0.8,
            micro_type: 2,
            go_for_the_kill: true,
            neural_data_mod: 1,
            adv_eco_mod: 1,
            adv_eco_mod_alone: 0,
            fabber_to_factory_ratio_basic: 2,
            fabber_to_factory_ratio_advanced: 2,
            fabber_alone_on_planet_mod: 3,
            basic_to_advanced_factory_ratio: 0,
            factory_alone_on_planet_mod: 0.5,
            min_basic_fabbers: 5,
            min_advanced_fabbers: 1
          },
          commander: '/pa/units/commanders/imperial_invictus/imperial_invictus.json'
        },
        systemDescription: "!LOC:Unlike the other factions, the Legionis Machina operates as a hierarchy. Senior Legates have several Vassal Legates assigned to them, and all Legates are subjects of Invictus himself.",
        systemTemplate: {
          name: 'Agoge - Legonis Machina',
          Planets: [
            {
              name: 'Agoge Prime',
              starting_planet: true,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [700, 700],
              Height: [20, 25],
              Water: [40, 50],
              Temp: [0, 100],
              MetalDensity: [50, 70],
              MetalClusters: [25, 49],
              BiomeScale: [100, 100],
              Position: [-47500, 0],
              Velocity: [0, -294.3776],
              Biomes: ['earth']
            },
            {
              name: 'Agoge Beta',
              starting_planet: true,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [700, 700],
              Height: [5, 15],
              Water: [0, 0],
              Temp: [0, 0],
              MetalDensity: [50, 70],
              MetalClusters: [25, 49],
              BiomeScale: [100, 100],
              Position: [-32500, 0],
              Velocity: [0, -70.7708],
              Biomes: ['moon']
            },
            {
              name: 'Agoge Gamma',
              starting_planet: false,
              mass: 50000,
              Thrust: [0, 0],
              Radius: [1500, 1500],
              Height: [0, 0],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [0, 0],
              MetalClusters: [0, 0],
              BiomeScale: [0, 0],
              Position: [-40000, 0],
              Velocity: [0, -111.8034],
              Biomes: ['gas']
            }
          ]
        }
      },
      {
        name: 'Tau Leporis - Legonis Machina',
        boss: {
          name: 'Imperator Invictus',
          character: 'Legion',
          econ_rate: 1.75,
          copies: 3,
          landing_policy: ['off_player_planet', 'on_player_planet', 'no_restriction'],
          personality: {
            percent_vehicle: 0.45,
            percent_bot: 0.25,
            percent_air: 0.2,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            metal_drain_check: 0.54,
            energy_drain_check: 0.65,
            metal_demand_check: 0.71,
            energy_demand_check: 0.8,
            micro_type: 2,
            go_for_the_kill: true,
            neural_data_mod: 1,
            adv_eco_mod: 1,
            adv_eco_mod_alone: 0,
            fabber_to_factory_ratio_basic: 2,
            fabber_to_factory_ratio_advanced: 2,
            fabber_alone_on_planet_mod: 3,
            basic_to_advanced_factory_ratio: 0,
            factory_alone_on_planet_mod: 0.5,
            min_basic_fabbers: 5,
            min_advanced_fabbers: 1
          },
          commander: '/pa/units/commanders/imperial_invictus/imperial_invictus.json'
        },
        systemDescription: "!LOC:If war is a commander's natural state, then the purest expression of this is the Legionis Machina. It begs the question, though--what happens after they conquer this galaxy, if they do?",
        systemTemplate: {
          name: 'Tau Leporis - Legonis Machina',
          Planets: [
            {
              name: 'Tau Leporis Prime',
              starting_planet: true,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [700, 700],
              Height: [20, 25],
              Water: [40, 50],
              Temp: [0, 100],
              MetalDensity: [50, 70],
              MetalClusters: [25, 49],
              BiomeScale: [100, 100],
              Position: [-47500, 0],
              Velocity: [0, -294.3776],
              Biomes: ['earth']
            },
            {
              name: 'Tau Leporis Beta',
              starting_planet: true,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [700, 700],
              Height: [5, 15],
              Water: [0, 0],
              Temp: [0, 0],
              MetalDensity: [50, 70],
              MetalClusters: [25, 49],
              BiomeScale: [100, 100],
              Position: [-32500, 0],
              Velocity: [0, -70.7708],
              Biomes: ['moon']
            },
            {
              name: 'Tau Leporis Gamma',
              starting_planet: false,
              mass: 50000,
              Thrust: [0, 0],
              Radius: [1500, 1500],
              Height: [0, 0],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [0, 0],
              MetalClusters: [0, 0],
              BiomeScale: [0, 0],
              Position: [-40000, 0],
              Velocity: [0, -111.8034],
              Biomes: ['gas']
            }
          ]
        }
      },
      {
        name: 'Poseidon\'s Wrath - Legonis Machina',
        boss: {
          name: 'Imperator Invictus',
          character: 'Legion',
          econ_rate: 1.75,
          copies: 3,
          landing_policy: ['off_player_planet', 'on_player_planet', 'no_restriction'],
          personality: {
            percent_vehicle: 0.45,
            percent_bot: 0.25,
            percent_air: 0.2,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            metal_drain_check: 0.54,
            energy_drain_check: 0.65,
            metal_demand_check: 0.71,
            energy_demand_check: 0.8,
            micro_type: 2,
            go_for_the_kill: true,
            neural_data_mod: 1,
            adv_eco_mod: 1,
            adv_eco_mod_alone: 0,
            fabber_to_factory_ratio_basic: 2,
            fabber_to_factory_ratio_advanced: 2,
            fabber_alone_on_planet_mod: 3,
            basic_to_advanced_factory_ratio: 0,
            factory_alone_on_planet_mod: 0.5,
            min_basic_fabbers: 5,
            min_advanced_fabbers: 1
          },
          commander: '/pa/units/commanders/imperial_invictus/imperial_invictus.json'
        },
        systemDescription: "!LOC:The Legionis Machina can be considered a cult of personality, in that their purpose is void without Invictus. This is likely where their bitter hatred of The Synchronous comes from, as they view Metrarch as a false idol of sorts.",
        systemTemplate: {
          name: 'Poseidon\'s Wrath - Legonis Machina',
          Planets: [
            {
              name: 'Poseidon\'s Wrath Prime',
              starting_planet: true,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [700, 700],
              Height: [20, 25],
              Water: [40, 50],
              Temp: [0, 100],
              MetalDensity: [50, 70],
              MetalClusters: [25, 49],
              BiomeScale: [100, 100],
              Position: [-47500, 0],
              Velocity: [0, -294.3776],
              Biomes: ['earth']
            },
            {
              name: 'Poseidon\'s Wrath Beta',
              starting_planet: true,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [700, 700],
              Height: [5, 15],
              Water: [0, 0],
              Temp: [0, 0],
              MetalDensity: [50, 70],
              MetalClusters: [25, 49],
              BiomeScale: [100, 100],
              Position: [-32500, 0],
              Velocity: [0, -70.7708],
              Biomes: ['moon']
            },
            {
              name: 'Poseidon\'s Wrath Gamma',
              starting_planet: false,
              mass: 50000,
              Thrust: [0, 0],
              Radius: [1500, 1500],
              Height: [0, 0],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [0, 0],
              MetalClusters: [0, 0],
              BiomeScale: [0, 0],
              Position: [-40000, 0],
              Velocity: [0, -111.8034],
              Biomes: ['gas']
            }
          ]
        }
      }
    ], // teams
    minions: [
      {
        // All Tanks
        name: 'Legate Able',
        character: 'Tank',
        color: [[204, 255, 255], [192, 192, 192]],
        econ_rate: 1,
        personality: {
          percent_vehicle: 1,
          percent_bot: 0,
          percent_air: 0,
          percent_naval: 0,
          percent_orbital: 0,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.71,
          energy_demand_check: 0.8,
          micro_type: 0,
          go_for_the_kill: false,
          neural_data_mod: 1,
          personality_tags:
            [
              "GWAlly",
              "SlowerExpansion"
            ],
          adv_eco_mod: 1.3,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: false,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: false,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 10,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 10
        },
        commander: '/pa/units/commanders/imperial_able/imperial_able.json'
      },
      {
        // All Bots
        name: 'Legate AceAI',
        character: 'Bot',
        color: [[153, 255, 255], [192, 192, 192]],
        econ_rate: 1,
        personality: {
          percent_vehicle: 0,
          percent_bot: 1,
          percent_naval: 0,
          percent_orbital: 0,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.71,
          energy_demand_check: 0.8,
          micro_type: 0,
          go_for_the_kill: false,
          neural_data_mod: 1,
          personality_tags:
            [
              "GWAlly",
              "SlowerExpansion"
            ],
          adv_eco_mod: 1.3,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: false,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: false,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 10,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 10
        },
        commander: '/pa/units/commanders/imperial_aceal/imperial_aceal.json'
      },
      {
        // Uber
        name: 'Legate Alpha',
        character: 'Uber',
        color: [[102, 255, 255], [192, 192, 192]],
        econ_rate: 1,
        personality: {
          percent_land: 1,
          percent_air: 0,
          percent_naval: 0,
          percent_orbital: 0,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.85,
          energy_demand_check: 0.8,
          micro_type: 0,
          go_for_the_kill: false,
          neural_data_mod: 1,
          personality_tags:
            [
              "GWAlly",
              "SlowerExpansion"
            ],
          adv_eco_mod: 1,
          adv_eco_mod_alone: 0,
          priority_scout_metal_spots: false,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: false,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 2,
          fabber_alone_on_planet_mod: 3,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 3,
          max_basic_fabbers: 10,
          min_advanced_fabbers: 1,
          max_advanced_fabbers: 10
        },
        commander: '/pa/units/commanders/imperial_alpha/imperial_alpha.json'
      },
      {
        // Platinum
        name: 'Legate Aryst0krat',
        character: 'Platinum',
        color: [[0, 255, 255], [192, 192, 192]],
        econ_rate: 1,
        personality: {
          percent_land: 1,
          percent_air: 0,
          percent_naval: 0,
          percent_orbital: 0,
          metal_drain_check: 0.54,
          energy_drain_check: 0.77,
          metal_demand_check: 0.85,
          energy_demand_check: 0.92,
          micro_type: 0,
          go_for_the_kill: false,
          neural_data_mod: 1.15,
          personality_tags:
            [
              "GWAlly",
              "SlowerExpansion"
            ],
          adv_eco_mod: 1,
          adv_eco_mod_alone: 0,
          priority_scout_metal_spots: false,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: false,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 2,
          fabber_alone_on_planet_mod: 3,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 10,
          min_advanced_fabbers: 2,
          max_advanced_fabbers: 10
        },
        commander: '/pa/units/commanders/imperial_aryst0krat/imperial_aryst0krat.json'
      },
      {
        // Gold
        name: 'Legate Chronoblip',
        character: 'Gold',
        color: [[0, 204, 204], [192, 192, 192]],
        econ_rate: 1,
        personality: {
          percent_land: 1,
          percent_air: 0,
          percent_naval: 0,
          percent_orbital: 0,
          metal_drain_check: 0.54,
          energy_drain_check: 0.77,
          metal_demand_check: 0.85,
          energy_demand_check: 0.92,
          micro_type: 0,
          go_for_the_kill: false,
          neural_data_mod: 1.3,
          personality_tags:
            [
              "GWAlly",
              "SlowerExpansion"
            ],
          adv_eco_mod: 1,
          adv_eco_mod_alone: 0,
          priority_scout_metal_spots: false,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: false,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 0.5,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 3,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 3,
          max_basic_fabbers: 10,
          min_advanced_fabbers: 2,
          max_advanced_fabbers: 10
        },
        commander: '/pa/units/commanders/imperial_chronoblip/imperial_chronoblip.json'
      },
      {
        // Silver
        name: 'Legate Mjon',
        character: 'Silver',
        color: [[0, 153, 153], [192, 192, 192]],
        econ_rate: 1,
        personality: {
          percent_land: 1,
          percent_air: 0,
          percent_naval: 0,
          percent_orbital: 0,
          metal_drain_check: 0.54,
          energy_drain_check: 0.77,
          metal_demand_check: 0.95,
          energy_demand_check: 0.92,
          micro_type: 0,
          go_for_the_kill: false,
          neural_data_mod: 1.45,
          personality_tags:
            [
              "GWAlly",
              "SlowerExpansion"
            ],
          adv_eco_mod: 1,
          adv_eco_mod_alone: 0,
          priority_scout_metal_spots: false,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: false,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 2,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 1,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 4,
          max_basic_fabbers: 10,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 10
        },
        commander: '/pa/units/commanders/imperial_mjon/imperial_mjon.json'
      },
      {
        // Basic Tech
        name: 'Legate Delta',
        character: 'Basic Tech',
        color: [[153, 204, 255], [192, 192, 192]],
        econ_rate: 1,
        personality: {
          percent_land: 1,
          percent_air: 0,
          percent_naval: 0,
          percent_orbital: 0,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.71,
          energy_demand_check: 0.8,
          micro_type: 0,
          go_for_the_kill: false,
          neural_data_mod: 1,
          personality_tags:
            [
              "GWAlly",
              "SlowerExpansion"
            ],
          adv_eco_mod: 3,
          adv_eco_mod_alone: 3,
          priority_scout_metal_spots: false,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: false,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 10,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 10
        },
        commander: '/pa/units/commanders/imperial_delta/imperial_delta.json'
      },
      {
        // Advanced Tech
        name: 'Legate Enzomatrix',
        character: 'Advanced Tech',
        color: [[102, 178, 255], [192, 192, 192]],
        econ_rate: 1,
        personality: {
          percent_land: 1,
          percent_air: 0,
          percent_naval: 0,
          percent_orbital: 0,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.71,
          energy_demand_check: 0.8,
          micro_type: 0,
          go_for_the_kill: false,
          neural_data_mod: 1,
          personality_tags:
            [
              "GWAlly",
              "SlowerExpansion"
            ],
          adv_eco_mod: 0.5,
          adv_eco_mod_alone: 0,
          priority_scout_metal_spots: false,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: false,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 2,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 4,
          max_basic_fabbers: 10,
          min_advanced_fabbers: 1,
          max_advanced_fabbers: 10
        },
        commander: '/pa/units/commanders/imperial_enzomatrix/imperial_enzomatrix.json'
      },
      {
        // Cautious
        name: 'Legate Fiveleafclover',
        character: 'Cautious',
        color: [[51, 153, 255], [192, 192, 192]],
        econ_rate: 1,
        personality: {
          percent_land: 1,
          percent_air: 0,
          percent_naval: 0,
          percent_orbital: 0,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.71,
          energy_demand_check: 0.8,
          micro_type: 0,
          go_for_the_kill: false,
          neural_data_mod: 0.75,
          personality_tags:
            [
              "GWAlly",
              "SlowerExpansion"
            ],
          adv_eco_mod: 1.3,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: false,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: false,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 4,
          max_basic_fabbers: 10,
          min_advanced_fabbers: 2,
          max_advanced_fabbers: 10
        },
        commander: '/pa/units/commanders/imperial_fiveleafclover/imperial_fiveleafclover.json'
      },
      {
        // Aggressive
        name: 'Legate Gamma',
        character: 'Aggressive',
        color: [[0, 128, 255], [192, 192, 192]],
        econ_rate: 1,
        personality: {
          percent_land: 1,
          percent_air: 0,
          percent_naval: 0,
          percent_orbital: 0,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.71,
          energy_demand_check: 0.8,
          micro_type: 0,
          go_for_the_kill: false,
          neural_data_mod: 2,
          personality_tags:
            [
              "GWAlly",
              "SlowerExpansion"
            ],
          adv_eco_mod: 1.3,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: false,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: false,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 10,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 10
        },
        commander: '/pa/units/commanders/imperial_gamma/imperial_gamma.json'
      },
      {
        // Rush
        name: 'Legate Gnugfur',
        character: 'Rush',
        color: [[0, 102, 204], [192, 192, 192]],
        econ_rate: 1,
        personality: {
          percent_bot: 1,
          percent_vehicle: 0,
          percent_air: 0,
          percent_naval: 0,
          percent_orbital: 0,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.71,
          energy_demand_check: 0.8,
          micro_type: 0,
          go_for_the_kill: false,
          neural_data_mod: 1.25,
          personality_tags:
            [
              "GWAlly",
              "SlowerExpansion"
            ],
          adv_eco_mod: 3,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: false,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: false,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 10,
          min_advanced_fabbers: 1,
          max_advanced_fabbers: 10
        },
        commander: '/pa/units/commanders/imperial_gnugfur/imperial_gnugfur.json'
      },
      {
        // Turtle
        name: 'Legate Invictus',
        character: 'Turtle',
        color: [[0, 76, 153], [192, 192, 192]],
        econ_rate: 1,
        personality: {
          percent_land: 1,
          percent_air: 0,
          percent_naval: 0,
          percent_orbital: 0,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.71,
          energy_demand_check: 0.8,
          micro_type: 0,
          go_for_the_kill: false,
          neural_data_mod: 0.5,
          personality_tags:
            [
              "GWAlly",
              "SlowerExpansion"
            ],
          adv_eco_mod: 0.85,
          adv_eco_mod_alone: 0,
          priority_scout_metal_spots: false,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: false,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 5,
          fabber_to_factory_ratio_advanced: 5,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 5,
          max_basic_fabbers: 10,
          min_advanced_fabbers: 4,
          max_advanced_fabbers: 10
        },
        commander: '/pa/units/commanders/imperial_invictus/imperial_invictus.json'
      },
      {
        // Original
        name: 'Legate Kapowaz',
        character: 'Vanilla',
        color: [[0, 0, 153], [192, 192, 192]],
        econ_rate: 1,
        personality: {
          percent_land: 0.4,
          percent_air: 0.35,
          percent_naval: 0.2,
          percent_orbital: 0.05,
          metal_drain_check: 0.75,
          energy_drain_check: 0.85,
          metal_demand_check: 0.75,
          energy_demand_check: 0.85,
          micro_type: 0,
          go_for_the_kill: false,
          neural_data_mod: 1,
          personality_tags:
            [
              "GWAlly",
              "SlowerExpansion"
            ],
          adv_eco_mod: 1.3,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: false,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: false,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 10,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 10
        },
        commander: '/pa/units/commanders/imperial_kapowaz/imperial_kapowaz.json'
      },
      {
        // Absurd
        name: 'Legate JT100010117',
        character: 'Absurd',
        color: [[0, 0, 204], [192, 192, 192]],
        econ_rate: 1,
        personality: {
          percent_vehicle: 0.45,
          percent_bot: 0.25,
          percent_air: 0.2,
          percent_naval: 0.05,
          percent_orbital: 0.05,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.71,
          energy_demand_check: 0.8,
          micro_type: 0,
          go_for_the_kill: false,
          neural_data_mod: 1,
          personality_tags:
            [
              "GWAlly",
              "SlowerExpansion"
            ],
          adv_eco_mod: 1.3,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: false,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: false,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 10,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 10
        },
        commander: '/pa/units/commanders/imperial_jt100010117/imperial_jt100010117.json'
      },
      {
        // Relentless
        name: 'Legate Kevin4001',
        character: 'Relentless',
        color: [[0, 0, 225], [192, 192, 192]],
        econ_rate: 1,
        personality: {
          percent_vehicle: 0.45,
          percent_bot: 0.25,
          percent_air: 0.2,
          percent_naval: 0.05,
          percent_orbital: 0.05,
          metal_drain_check: 0.44,
          energy_drain_check: 0.55,
          metal_demand_check: 0.61,
          energy_demand_check: 0.7,
          micro_type: 0,
          go_for_the_kill: false,
          neural_data_mod: 1.2,
          personality_tags:
            [
              "GWAlly",
              "SlowerExpansion"
            ],
          adv_eco_mod: 1.2,
          adv_eco_mod_alone: 0.95,
          priority_scout_metal_spots: false,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: false,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 10,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 10
        },
        commander: '/pa/units/commanders/imperial_kevin4001/imperial_kevin4001.json'
      },
      {
        // Hard
        name: 'Legate Mostlikely',
        character: 'Hard',
        color: [[51, 51, 255], [192, 192, 192]],
        econ_rate: 1,
        personality: {
          percent_vehicle: 0.45,
          percent_bot: 0.25,
          percent_air: 0.2,
          percent_naval: 0.05,
          percent_orbital: 0.05,
          metal_drain_check: 0.34,
          energy_drain_check: 0.45,
          metal_demand_check: 0.51,
          energy_demand_check: 0.6,
          micro_type: 0,
          go_for_the_kill: false,
          neural_data_mod: 1.5,
          personality_tags:
            [
              "GWAlly",
              "SlowerExpansion"
            ],
          adv_eco_mod: 1.1,
          adv_eco_mod_alone: 1,
          priority_scout_metal_spots: false,
          factory_build_delay_min: 1,
          factory_build_delay_max: 3,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: false,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 10,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 10
        },
        commander: '/pa/units/commanders/imperial_mostlikely/imperial_mostlikely.json'
      },
      {
        // Bronze
        name: 'Legate Nagasher',
        character: 'Bronze',
        color: [[204, 229, 255], [192, 192, 192]],
        econ_rate: 1,
        personality: {
          percent_land: 0.7,
          percent_air: 0.2,
          percent_naval: 0.05,
          percent_orbital: 0.05,
          metal_drain_check: 0.54,
          energy_drain_check: 0.77,
          metal_demand_check: 0.95,
          energy_demand_check: 0.92,
          micro_type: 0,
          go_for_the_kill: false,
          neural_data_mod: 1.6,
          personality_tags:
            [
              "GWAlly",
              "SlowerExpansion"
            ],
          adv_eco_mod: 0.5,
          adv_eco_mod_alone: 0,
          priority_scout_metal_spots: false,
          factory_build_delay_min: 0,
          factory_build_delay_max: 6,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: false,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 5,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 1,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 1,
          min_basic_fabbers: 5,
          max_basic_fabbers: 10,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 10
        },
        commander: '/pa/units/commanders/imperial_nagasher/imperial_nagasher.json'
      }
    ], // minions
  };
});