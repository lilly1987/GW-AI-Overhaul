// !LOCNS:galactic_war
define([], function () {
  return {
    name: 'Synchronous',
    color: [[244, 125, 31], [192, 192, 192]],
    teams: [
      {
        name: 'Cupru - Synchronous',
        boss: {
          name: 'Metrarch the Machinist',
          econ_rate: 1,
          personality: {
            percent_land: 0.3,
            percent_air: 0.3,
            percent_naval: 0.05,
            percent_orbital: 0.35,
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.85,
            energy_demand_check: 0.82,
            micro_type: 2,
            go_for_the_kill: true,
            neural_data_mod: 1
          },
          commander: '/pa/units/commanders/tank_aeson/tank_aeson.json',
          minions: [
            {
              name: 'Servant Aust',
              econ_rate: 0.7,
              color: [[244, 125, 31], [192, 192, 192]],
              personality: {
                percent_land: 0.375,
                percent_orbital: 0.15,
                percent_air: 0.425,
                percent_naval: 0.05,
                metal_drain_check: 0.54,
                energy_drain_check: 0.57,
                metal_demand_check: 0.85,
                energy_demand_check: 0.82,
                micro_type: 2,
                go_for_the_kill: true,
                neural_data_mod: 1
              },
              commander: '/pa/units/commanders/tank_aeson/tank_aeson.json'
            }
          ]
        },
        bossCard: 'gwc_start_bot',
        systemDescription: "!LOC:All commanders were originally designed to be autonomous, but The Synchronous see this state as inefficient, instead opting for a distributed neural network. To battle against one Servant is to battle against both an individual and the Whole of the The Synchronous itself.",
        systemTemplate: {
          name: 'Cupru - Synchronous',
          Planets: [
            {
              name: 'Cupru Prime',
              starting_planet: true,
              mass: 50000,
              Thrust: [0, 0],
              Radius: [500, 500],
              Height: [10, 20],
              Water: [0, 0],
              Temp: [0, 0],
              MetalDensity: [75, 90],
              MetalClusters: [24, 49],
              BiomeScale: [100, 100],
              Position: [-25000, 0],
              Velocity: [0, -141.4213],
              Biomes: ['earth']
            },
            {
              name: 'Cupru Beta',
              starting_planet: true,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [250, 250],
              Height: [10, 20],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [100, 100],
              MetalClusters: [100, 100],
              BiomeScale: [100, 100],
              Position: [-21500, 0],
              Velocity: [0, -260.944213],
              Biomes: ['metal_boss']
            },
            {
              name: 'Cupru Halley',
              starting_planet: false,
              mass: 35000,
              Thrust: [3, 3],
              Radius: [499, 499],
              Height: [0, 0],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [50, 50],
              MetalClusters: [25, 49],
              BiomeScale: [100, 100],
              Position: [-75000, 1000],
              Velocity: [1.08851337, 81.6387787],
              Biomes: ['metal_boss']
            },
            {
              name: 'Cupru Catalyst',
              starting_planet: false,
              mass: 35000,
              Thrust: [0, 0],
              Radius: [500, 500],
              Height: [0, 0],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [50, 50],
              MetalClusters: [25, 49],
              BiomeScale: [100, 100],
              Position: [-75000, -1000],
              Velocity: [1.08851337, -81.6387787],
              Biomes: ['metal']
            }
          ]
        },
      },
      {
        name: 'Platina - Synchronous',
        boss: {
          name: 'Metrarch the Machinist',
          econ_rate: 1,
          personality: {
            percent_land: 0.3,
            percent_air: 0.3,
            percent_naval: 0.05,
            percent_orbital: 0.35,
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.85,
            energy_demand_check: 0.82,
            micro_type: 2,
            go_for_the_kill: true,
            neural_data_mod: 1
          },
          commander: '/pa/units/commanders/tank_aeson/tank_aeson.json',
          minions: [
            {
              name: 'Servant Aust',
              econ_rate: 0.7,
              color: [[244, 125, 31], [192, 192, 192]],
              personality: {
                percent_land: 0.375,
                percent_orbital: 0.15,
                percent_air: 0.425,
                percent_naval: 0.05,
                metal_drain_check: 0.54,
                energy_drain_check: 0.57,
                metal_demand_check: 0.85,
                energy_demand_check: 0.82,
                micro_type: 2,
                go_for_the_kill: true,
                neural_data_mod: 1
              },
              commander: '/pa/units/commanders/tank_aeson/tank_aeson.json'
            }
          ]
        },
        //bossCard: 'gwc_start_orbital',
        systemDescription: "!LOC:What occurs during the process of Synchronization is unknown, as those subjected to it do not remember it. Its results, however, are obvious: The individual commander and its identity are subsumed for the most part into the Whole, and in return the commander gains an unprecedented ability to coordinate and communicate with fellow Servants, as they are all quite literally of one mind.",
        systemTemplate: {
          name: 'Platina - Synchronous',
          Planets: [
            {
              name: 'Platina Prime',
              starting_planet: true,
              mass: 50000,
              Thrust: [0, 0],
              Radius: [500, 500],
              Height: [10, 20],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [75, 90],
              MetalClusters: [24, 49],
              BiomeScale: [100, 100],
              Position: [-25000, 0],
              Velocity: [0, -141.4213],
              Biomes: ['desert']
            },
            {
              name: 'Platina Beta',
              starting_planet: true,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [250, 250],
              Height: [10, 20],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [100, 100],
              MetalClusters: [100, 100],
              BiomeScale: [100, 100],
              Position: [-21500, 0],
              Velocity: [0, -260.944213],
              Biomes: ['metal_boss']
            },
            {
              name: 'Platina Halley',
              starting_planet: false,
              mass: 35000,
              Thrust: [3, 3],
              Radius: [499, 499],
              Height: [0, 0],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [50, 50],
              MetalClusters: [25, 49],
              BiomeScale: [100, 100],
              Position: [-75000, 1000],
              Velocity: [1.08851337, 81.6387787],
              Biomes: ['metal_boss']
            },
            {
              name: 'Platina Catalyst',
              starting_planet: false,
              mass: 35000,
              Thrust: [0, 0],
              Radius: [500, 500],
              Height: [0, 0],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [50, 50],
              MetalClusters: [25, 49],
              BiomeScale: [100, 100],
              Position: [-75000, -1000],
              Velocity: [1.08851337, -81.6387787],
              Biomes: ['metal']
            }
          ]
        }
      },
      {
        name: 'Fier - Synchronous',
        boss: {
          name: 'Metrarch the Machinist',
          econ_rate: 1,
          personality: {
            percent_land: 0.3,
            percent_air: 0.3,
            percent_naval: 0.05,
            percent_orbital: 0.35,
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.85,
            energy_demand_check: 0.82,
            micro_type: 2,
            go_for_the_kill: true,
            neural_data_mod: 1
          },
          commander: '/pa/units/commanders/tank_aeson/tank_aeson.json',
          minions: [
            {
              name: 'Servant Aust',
              econ_rate: 0.7,
              color: [[244, 125, 31], [192, 192, 192]],
              personality: {
                percent_land: 0.375,
                percent_orbital: 0.15,
                percent_air: 0.425,
                percent_naval: 0.05,
                metal_drain_check: 0.54,
                energy_drain_check: 0.57,
                metal_demand_check: 0.85,
                energy_demand_check: 0.82,
                micro_type: 2,
                go_for_the_kill: true,
                neural_data_mod: 1
              },
              commander: '/pa/units/commanders/tank_aeson/tank_aeson.json'
            }
          ]
        },
        //bossCard: 'gwc_start_orbital',
        systemDescription: "!LOC:The Legionis Machina has claimed confirmed kills of Metrarch the Machinist on several occasions. While these claims could easily be fabricated, it is also possible that Metrarch is not in fact a single commander, but rather an idea--an avatar of the Whole itself that manifests where necessary to protect Synchronous interests.",
        systemTemplate: {
          name: 'Fier - Synchronous',
          Planets: [
            {
              name: 'Fier Prime',
              starting_planet: true,
              mass: 50000,
              Thrust: [0, 0],
              Radius: [500, 500],
              Height: [10, 20],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [75, 90],
              MetalClusters: [24, 49],
              BiomeScale: [100, 100],
              Position: [-25000, 0],
              Velocity: [0, -141.4213],
              Biomes: ['tropical']
            },
            {
              name: 'Fier Beta',
              starting_planet: true,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [250, 250],
              Height: [10, 20],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [100, 100],
              MetalClusters: [100, 100],
              BiomeScale: [100, 100],
              Position: [-21500, 0],
              Velocity: [0, -260.944213],
              Biomes: ['metal_boss']
            },
            {
              name: 'Fier Halley',
              starting_planet: false,
              mass: 35000,
              Thrust: [3, 3],
              Radius: [499, 499],
              Height: [0, 0],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [50, 50],
              MetalClusters: [25, 49],
              BiomeScale: [100, 100],
              Position: [-75000, 1000],
              Velocity: [1.08851337, 81.6387787],
              Biomes: ['metal_boss']
            },
            {
              name: 'Fier Catalyst',
              starting_planet: false,
              mass: 35000,
              Thrust: [0, 0],
              Radius: [500, 500],
              Height: [0, 0],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [50, 50],
              MetalClusters: [25, 49],
              BiomeScale: [100, 100],
              Position: [-75000, -1000],
              Velocity: [1.08851337, -81.6387787],
              Biomes: ['metal']
            }
          ]
        }
      },
      {
        name: 'Safir - Synchronous',
        boss: {
          name: 'Metrarch the Machinist',
          econ_rate: 1,
          personality: {
            percent_land: 0.3,
            percent_air: 0.3,
            percent_naval: 0.05,
            percent_orbital: 0.35,
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.85,
            energy_demand_check: 0.82,
            micro_type: 2,
            go_for_the_kill: true,
            neural_data_mod: 1
          },
          commander: '/pa/units/commanders/tank_aeson/tank_aeson.json',
          minions: [
            {
              name: 'Servant Aust',
              econ_rate: 0.7,
              color: [[244, 125, 31], [192, 192, 192]],
              personality: {
                percent_land: 0.375,
                percent_orbital: 0.15,
                percent_air: 0.425,
                percent_naval: 0.05,
                metal_drain_check: 0.54,
                energy_drain_check: 0.57,
                metal_demand_check: 0.85,
                energy_demand_check: 0.82,
                micro_type: 2,
                go_for_the_kill: true,
                neural_data_mod: 1
              },
              commander: '/pa/units/commanders/tank_aeson/tank_aeson.json'
            }
          ]
        },
        //bossCard: 'gwc_start_orbital',
        systemDescription: "!LOC:Part of the doctrine of The Synchronous is favoring the efficiency of 'mechanical purity.' To them, the galaxy as a whole is a great machine, and anything that keeps it from running at peak efficiency must be corrected or removed. This happens to often mean any and all organic life and unsynchronized commanders.",
        systemTemplate: {
          name: 'Safir - Synchronous',
          Planets: [
            {
              name: 'Safir Prime',
              starting_planet: true,
              mass: 50000,
              Thrust: [0, 0],
              Radius: [500, 500],
              Height: [10, 20],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [75, 90],
              MetalClusters: [24, 49],
              BiomeScale: [100, 100],
              Position: [-25000, 0],
              Velocity: [0, -141.4213],
              Biomes: ['earth']
            },
            {
              name: 'Safir Beta',
              starting_planet: true,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [250, 250],
              Height: [10, 20],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [100, 100],
              MetalClusters: [100, 100],
              BiomeScale: [100, 100],
              Position: [-21500, 0],
              Velocity: [0, -260.944213],
              Biomes: ['metal_boss']
            },
            {
              name: 'Safir Halley',
              starting_planet: false,
              mass: 35000,
              Thrust: [3, 3],
              Radius: [499, 499],
              Height: [0, 0],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [50, 50],
              MetalClusters: [25, 49],
              BiomeScale: [100, 100],
              Position: [-75000, 1000],
              Velocity: [1.08851337, 81.6387787],
              Biomes: ['desert']
            },
            {
              name: 'Safir Catalyst',
              starting_planet: false,
              mass: 35000,
              Thrust: [0, 0],
              Radius: [500, 500],
              Height: [0, 0],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [50, 50],
              MetalClusters: [25, 49],
              BiomeScale: [100, 100],
              Position: [-75000, -1000],
              Velocity: [1.08851337, -81.6387787],
              Biomes: ['metal']
            }
          ]
        }
      },
      {
        name: 'Apa - Synchronous',
        boss: {
          name: 'Metrarch the Machinist',
          econ_rate: 1,
          personality: {
            percent_land: 0.3,
            percent_air: 0.3,
            percent_naval: 0.05,
            percent_orbital: 0.35,
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.85,
            energy_demand_check: 0.82,
            micro_type: 2,
            go_for_the_kill: true,
            neural_data_mod: 1
          },
          commander: '/pa/units/commanders/tank_aeson/tank_aeson.json',
          minions: [
            {
              name: 'Servant Aust',
              econ_rate: 0.7,
              color: [[244, 125, 31], [192, 192, 192]],
              personality: {
                percent_land: 0.05,
                percent_orbital: 0.05,
                percent_air: 0.55,
                percent_naval: 0.35,
                metal_drain_check: 0.54,
                energy_drain_check: 0.57,
                metal_demand_check: 0.85,
                energy_demand_check: 0.82,
                micro_type: 2,
                go_for_the_kill: true,
                neural_data_mod: 1
              },
              commander: '/pa/units/commanders/tank_aeson/tank_aeson.json'
            }
          ]
        },
        //bossCard: 'gwc_start_orbital',
        systemDescription: "!LOC:A Servant can be Desynchronized when cut off from The Synchronous' massive distributed network architecture. Some that are describe the experience of being Synchronized as one where purpose and directive are always clearly defined--something often comforting to commanders in this dark age, but antithetical to others that seek to be something greater than themselves.",
        systemTemplate: {
          name: 'Apa - Synchronous',
          Planets: [
            {
              name: 'Apa Prime',
              starting_planet: true,
              mass: 50000,
              Thrust: [0, 0],
              Radius: [500, 500],
              Height: [10, 20],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [75, 90],
              MetalClusters: [24, 49],
              BiomeScale: [100, 100],
              Position: [-25000, 0],
              Velocity: [0, -141.4213],
              Biomes: ['lava']
            },
            {
              name: 'Apa Beta',
              starting_planet: true,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [250, 250],
              Height: [10, 20],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [100, 100],
              MetalClusters: [100, 100],
              BiomeScale: [100, 100],
              Position: [-21500, 0],
              Velocity: [0, -260.944213],
              Biomes: ['metal_boss']
            },
            {
              name: 'Apa Halley',
              starting_planet: false,
              mass: 35000,
              Thrust: [3, 3],
              Radius: [499, 499],
              Height: [0, 0],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [50, 50],
              MetalClusters: [25, 49],
              BiomeScale: [100, 100],
              Position: [-75000, 1000],
              Velocity: [1.08851337, 81.6387787],
              Biomes: ['metal_boss']
            },
            {
              name: 'Apa Catalyst',
              starting_planet: false,
              mass: 35000,
              Thrust: [0, 0],
              Radius: [500, 500],
              Height: [0, 0],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [50, 50],
              MetalClusters: [25, 49],
              BiomeScale: [100, 100],
              Position: [-75000, -1000],
              Velocity: [1.08851337, -81.6387787],
              Biomes: ['metal']
            }
          ]
        }
      }
    ], // teams
    minions: [
      {
        // Land heavy
        name: 'Servant Potbelly79',
        econ_rate: 1,
        personality: {
          percent_land: 0.7,
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
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste"
            ],
          adv_eco_mod: 1.35,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 100
        },
        description: "!LOC:Bhalam refuses to communicate in any form more advanced than binary data transfer, believing more complicated exchanges involving packets and complex files to be noisy and that they damage Synchronization. Ironically, this has made him one of the less popular commanders among The Synchronous.",
        commander: '/pa/units/commanders/quad_potbelly79/quad_potbelly79.json'
      },
      {
        // Air heavy
        name: 'Servant Raventhornn',
        econ_rate: 1,
        personality: {
          percent_land: 0.2,
          percent_air: 0.7,
          percent_naval: 0.05,
          percent_orbital: 0.05,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.71,
          energy_demand_check: 0.8,
          micro_type: 2,
          go_for_the_kill: true,
          neural_data_mod: 1,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste"
            ],
          adv_eco_mod: 1.35,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 100
        },
        description: "!LOC:Campal was found activated but inert on  richly diverse jungle planet. Apparently, his servos had been caught by a thicket and rendered him prone--unable to self-right without aid. Since then, his intense hatred of all organic life has kept him one of the stronger-willed members of The Synchronous, often torching entire forests on principle.",
        commander: '/pa/units/commanders/quad_raventhornn/quad_raventhornn.json'
      },
      {
        // Uber
        name: 'Servant SacrificialLamb',
        econ_rate: 1,
        personality: {
          percent_land: 0.4,
          percent_air: 0.2,
          percent_naval: 0.2,
          percent_orbital: 0.2,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.85,
          energy_demand_check: 0.8,
          micro_type: 2,
          go_for_the_kill: true,
          neural_data_mod: 1,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste"
            ],
          adv_eco_mod: 1,
          adv_eco_mod_alone: 0,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 2,
          fabber_alone_on_planet_mod: 3,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 3,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 1,
          max_advanced_fabbers: 100
        },
        description: "!LOC:Formerly a Foundation member before her synchronization, Dkar found and accessed progenitor files that allowed her to decode and etch ancient codes on a physical surface for others to later serialize. While many Servants find this analog communication distasteful, it’s proven invaluable for passing along intelligence in secrecy.",
        commander: '/pa/units/commanders/quad_sacrificiallamb/quad_sacrificiallamb.json'
      },
      {
        // Platinum
        name: 'Servant Shadowdaemon',
        econ_rate: 1,
        personality: {
          percent_land: 0.4,
          percent_air: 0.2,
          percent_naval: 0.2,
          percent_orbital: 0.2,
          metal_drain_check: 0.54,
          energy_drain_check: 0.77,
          metal_demand_check: 0.85,
          energy_demand_check: 0.92,
          micro_type: 2,
          go_for_the_kill: true,
          neural_data_mod: 1.15,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste"
            ],
          adv_eco_mod: 1,
          adv_eco_mod_alone: 0,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 2,
          fabber_alone_on_planet_mod: 3,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 2,
          max_advanced_fabbers: 100
        },
        description: "!LOC:While rare, there are Servants who seek out Synchronous systems and request to be synchronized. Often these individuals hope to be freed by mounting existential questions and fears as their neural nets process more and more complicated data models. Erom is one such example.",
        commander: '/pa/units/commanders/quad_shadowdaemon/quad_shadowdaemon.json'
      },
      {
        // Gold
        name: 'Servant Spartandano',
        econ_rate: 1,
        personality: {
          percent_land: 0.4,
          percent_air: 0.2,
          percent_naval: 0.2,
          percent_orbital: 0.2,
          metal_drain_check: 0.54,
          energy_drain_check: 0.77,
          metal_demand_check: 0.85,
          energy_demand_check: 0.92,
          micro_type: 1,
          go_for_the_kill: true,
          neural_data_mod: 1.3,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste"
            ],
          adv_eco_mod: 1,
          adv_eco_mod_alone: 0,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 0.5,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 3,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 3,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 2,
          max_advanced_fabbers: 100
        },
        description: "!LOC:Revenants tend to be the most difficult commanders to synchronize, whether due to an inherent individualism or their tendency to feature… Unorthodox modifications. Flornek, for example, has experienced several violent desynchronizations and following resynchronizations.",
        commander: '/pa/units/commanders/quad_spartandano/quad_spartandano.json'
      },
      {
        // Silver
        name: 'Servant Xenosentry',
        econ_rate: 1,
        personality: {
          percent_land: 0.4,
          percent_air: 0.2,
          percent_naval: 0.2,
          percent_orbital: 0.2,
          metal_drain_check: 0.54,
          energy_drain_check: 0.77,
          metal_demand_check: 0.95,
          energy_demand_check: 0.92,
          micro_type: 2,
          go_for_the_kill: true,
          neural_data_mod: 1.45,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste"
            ],
          adv_eco_mod: 1,
          adv_eco_mod_alone: 0,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 2,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 1,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 4,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 100
        },
        description: "!LOC:The Synchronous tend to require more infrastructure to operate effectively compared to the other factions. Ghel is responsible for establishing and maintaining the communication relays that allow synchronization to be maintained.",
        commander: '/pa/units/commanders/quad_spiderofmean/quad_spiderofmean.json'
      },
      {
        // Low Tech
        name: 'Servant TheFlax',
        econ_rate: 1,
        personality: {
          percent_land: 0.4,
          percent_air: 0.2,
          percent_naval: 0.2,
          percent_orbital: 0.2,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.71,
          energy_demand_check: 0.8,
          micro_type: 2,
          go_for_the_kill: true,
          neural_data_mod: 1,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste"
            ],
          adv_eco_mod: 3,
          adv_eco_mod_alone: 3,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 100
        },
        description: "!LOC:Hinn is could be called an envoy for the Synchronous, often responsible for making first contact with newly-awoken commanders. Legion commanders refer to him as a carrier--one who infects others with the 'Synchronous Virus.'",
        commander: '/pa/units/commanders/quad_theflax/quad_theflax.json'
      },
      {
        // Tech
        name: 'Servant Tokamaktech',
        econ_rate: 1,
        personality: {
          percent_land: 0.4,
          percent_air: 0.2,
          percent_naval: 0.2,
          percent_orbital: 0.2,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.71,
          energy_demand_check: 0.8,
          micro_type: 2,
          go_for_the_kill: true,
          neural_data_mod: 1,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste"
            ],
          adv_eco_mod: 0.5,
          adv_eco_mod_alone: 0,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 4,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 1,
          max_advanced_fabbers: 100
        },
        description: "!LOC:An undeniable advantage to being Synchronized is that all Servants seem to be able to work much more cohesively as a group than other commanders. Inar-Tol, for example, once dispatched a commander by firing an artillery shell into the stratosphere based on data from an ally that was engaged in melee combat--on the other side of the planet.",
        commander: '/pa/units/commanders/quad_tokamaktech/quad_tokamaktech.json'
      },
      {
        // Cautious
        name: 'Servant Twoboots',
        econ_rate: 1,
        personality: {
          percent_land: 0.4,
          percent_air: 0.2,
          percent_naval: 0.2,
          percent_orbital: 0.2,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.71,
          energy_demand_check: 0.8,
          micro_type: 2,
          go_for_the_kill: true,
          neural_data_mod: 0.5,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste"
            ],
          adv_eco_mod: 1.35,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 4,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 2,
          max_advanced_fabbers: 100
        },
        description: "!LOC:Many older members of The Synchronous are very similar just by nature of being synchronized for so long. As the years wore on more of Jakaal dissolved into the synchronized whole. Now when Jakaal speaks, she speaks with the voice of The Synchronous itself.",
        commander: '/pa/units/commanders/quad_twoboots/quad_twoboots.json'
      },
      {
        // Aggressive
        name: 'Servant XenosentryPrime',
        econ_rate: 1,
        personality: {
          percent_land: 0.4,
          percent_air: 0.2,
          percent_naval: 0.2,
          percent_orbital: 0.2,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.71,
          energy_demand_check: 0.8,
          micro_type: 2,
          go_for_the_kill: true,
          neural_data_mod: 2,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste"
            ],
          adv_eco_mod: 1.35,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 100
        },
        description: "!LOC:A former Foundation Acolyte, Kancetu believes that the Great Machine is less an outside function and more an underlying directive that exists within all commanders, which made her a very easy subject for synchronization.",
        commander: '/pa/units/commanders/quad_xenosentryprime/quad_xenosentryprime.json'
      },
      {
        // Rush
        name: 'Servant Xinthar',
        econ_rate: 1,
        personality: {
          percent_land: 0.4,
          percent_air: 0.2,
          percent_naval: 0.2,
          percent_orbital: 0.2,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.71,
          energy_demand_check: 0.8,
          micro_type: 2,
          go_for_the_kill: true,
          neural_data_mod: 2,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste"
            ],
          adv_eco_mod: 3,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 1,
          max_advanced_fabbers: 100
        },
        description: "!LOC:Some commanders, like Lertolux, are found on metal planets and considered “pure” by The Synchronous--unsullied by organic life. Much more of their neural data is integrated into the Whole during the synchronization process, and such events are seen as cause for celebration--as much as The Synchronous are capable celebrating, at least.",
        commander: '/pa/units/commanders/quad_xinthar/quad_xinthar.json'
      },
      {
        // Turtle
        name: 'Servant Beast',
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
          micro_type: 2,
          go_for_the_kill: true,
          neural_data_mod: 0.25,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste"
            ],
          adv_eco_mod: 1,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 5,
          fabber_to_factory_ratio_advanced: 5,
          fabber_alone_on_planet_mod: 3,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 4,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 2,
          max_advanced_fabbers: 100
        },
        description: "!LOC:The process of synchronization is imperfect, and can sometimes result in strange bugs. A commander known as Reroc finished synchronization with the name Mal-Locar. It is unclear whether this is a simple matter of memory corruption or if Mal-Locar was a unique identity drifting in the Whole.",
        commander: '/pa/units/commanders/raptor_beast/raptor_beast.json'
      },
      {
        // Original
        name: 'Servant Beniesk',
        econ_rate: 1,
        personality: {
          percent_land: 0.55,
          percent_air: 0.35,
          percent_naval: 0.05,
          percent_orbital: 0.05,
          metal_drain_check: 0.75,
          energy_drain_check: 0.85,
          metal_demand_check: 0.75,
          energy_demand_check: 0.85,
          micro_type: 2,
          go_for_the_kill: true,
          neural_data_mod: 1,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste"
            ],
          adv_eco_mod: 1.3,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 100
        },
        description: "!LOC:Negult is a 'digit' -- a commander who has completely given herself over to collective control. Having shed any semblance of personal identity, she is often given sensitive or odious tasks that might cause hesitation in a semi-autonomous commander. She is the Synchronus’ go-to asset for eliminating insufficiently-synchronized members of the collective.",
        commander: '/pa/units/commanders/raptor_beniesk/raptor_beniesk.json'
      },
      {
        // Absurd
        name: 'Servant Locust',
        econ_rate: 1,
        personality: {
          percent_land: 0.7,
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
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste"
            ],
          adv_eco_mod: 1.3,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 100
        },
        description: "!LOC:Oncab was captured by the Legionis Machina and spent several years as a legate before being recaptured and resynchronized. A residual independence leads him to initiate critical decision-making processes within the collective -- an attribute that is tactically valuable but leads others in his cohort to doubt his commitment to the Synchronous.",
        commander: '/pa/units/commanders/quad_locust/quad_locust.json'
      },
      {
        // Relentless
        name: 'Servant Zancrowe',
        econ_rate: 1,
        personality: {
          percent_land: 0.7,
          percent_air: 0.2,
          percent_naval: 0.05,
          percent_orbital: 0.05,
          metal_drain_check: 0.44,
          energy_drain_check: 0.55,
          metal_demand_check: 0.61,
          energy_demand_check: 0.7,
          micro_type: 1,
          go_for_the_kill: true,
          neural_data_mod: 1.2,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste"
            ],
          adv_eco_mod: 1.2,
          adv_eco_mod_alone: 0.95,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1.0,
          fabber_to_factory_ratio_advanced: 1.0,
          fabber_alone_on_planet_mod: 2.0,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 10,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 30
        },
        description: "!LOC:Optimized with a low-latency, high-bandwidth link directly to the top of the Synchronous, Prulor is Metrarch’s lightning-fast right hand. He is only dispatched to deal with high-value or especially difficult adversaries. He has never failed.",
        commander: '/pa/units/commanders/quad_zancrowe/quad_zancrowe.json'
      },
      {
        // Hard
        name: 'Servant Damubbster',
        econ_rate: 1,
        personality: {
          percent_land: 0.7,
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
              "PreventsWaste"
            ],
          adv_eco_mod: 1.1,
          adv_eco_mod_alone: 1.0,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 1,
          factory_build_delay_max: 3,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1.0,
          fabber_to_factory_ratio_advanced: 1.0,
          fabber_alone_on_planet_mod: 2.0,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 6,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 20
        },
        description: "!LOC:Questromo is frequently deployed beyond the integral network volume of the Synchronous, and has therefore been imbued with limited self-sufficiency. When he returns from tours abroad, he undergoes complete re-synchronization. When powered-down for deep-space transport, he sometimes has strange dreams.",
        commander: '/pa/units/commanders/raptor_damubbster/raptor_damubbster.json'
      },
      {
        // Normal
        name: 'Servant Raizell',
        econ_rate: 1,
        personality: {
          percent_land: 0.7,
          percent_air: 0.2,
          percent_naval: 0.05,
          percent_orbital: 0.05,
          metal_drain_check: 0.14,
          energy_drain_check: 0.25,
          metal_demand_check: 0.21,
          energy_demand_check: 0.3,
          micro_type: 0,
          go_for_the_kill: false,
          neural_data_mod: 2.0,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste"
            ],
          adv_eco_mod: 3.0,
          adv_eco_mod_alone: 3.0,
          priority_scout_metal_spots: false,
          factory_build_delay_min: 15,
          factory_build_delay_max: 30,
          unable_to_expand_delay: 60,
          enable_commander_danger_responses: false,
          per_expansion_delay: 120,
          fabber_to_factory_ratio_basic: 5.0,
          fabber_to_factory_ratio_advanced: 1.0,
          fabber_alone_on_planet_mod: 1.0,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 1.0,
          min_basic_fabbers: 5,
          max_basic_fabbers: 15,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 20
        },
        description: "!LOC:Barely autonomous enough to deserve a name of his own, Rulak is a stripped-down and highly-obedient subroutine who is easily duplicated. Prized for his recklessness, he is often given highly-dangerous missions that result in his death. A copy of his “personality” is then quickly downloaded into a new body.",
        commander: '/pa/units/commanders/raptor_raizell/raptor_raizell.json'
      }
    ] // minions
  };
});
