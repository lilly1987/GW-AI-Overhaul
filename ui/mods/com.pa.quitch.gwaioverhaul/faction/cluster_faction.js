define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/faction/cluster_planets.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (planets, gwaioUnits) {
  var factionName = "Cluster";
  var baselinePersonality = {
    name: "Baseline",
    character: "!LOC:Baseline",
    color: [
      [204, 255, 255],
      [192, 192, 192],
    ],
    econ_rate: 1,
    personality: {
      percent_vehicle: 0.45,
      percent_bot: 0.4,
      percent_air: 0.05,
      percent_naval: 0.05,
      percent_orbital: 0.05,
      metal_drain_check: 0.54,
      energy_drain_check: 0.65,
      metal_demand_check: 0.71,
      energy_demand_check: 0.8,
      micro_type: 0,
      go_for_the_kill: false,
      neural_data_mod: 1,
      personality_tags: ["Default", "GWAlly", "SlowerExpansion", "queller"],
      adv_eco_mod: 1.5,
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
      min_basic_fabbers: 3,
      max_basic_fabbers: 4,
      min_advanced_fabbers: 1,
      max_advanced_fabbers: 3,
    },
    commander: "/pa/units/commanders/imperial_able/imperial_able.json",
  };
  var supportPlatform = gwaioUnits.angel;
  var supportCommander = gwaioUnits.colonel;

  return {
    name: factionName,
    color: [
      [128, 128, 128],
      [192, 192, 192],
    ],
    teams: [
      {
        name: factionName,
        boss: {
          name: "Node",
          character: "!LOC:Boss",
          isCluster: true,
          econ_rate: 1,
          personality: {
            percent_vehicle: 0.45,
            percent_bot: 0.4,
            percent_air: 0.05,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            metal_drain_check: 0.54,
            energy_drain_check: 0.65,
            metal_demand_check: 0.71,
            energy_demand_check: 0.8,
            micro_type: 2,
            go_for_the_kill: true,
            neural_data_mod: 1,
            adv_eco_mod: 2,
            adv_eco_mod_alone: 0.85,
            fabber_to_factory_ratio_basic: 1.5,
            fabber_to_factory_ratio_advanced: 1,
            fabber_alone_on_planet_mod: 3,
            basic_to_advanced_factory_ratio: 0,
            factory_alone_on_planet_mod: 0.5,
            min_basic_fabbers: 4,
            min_advanced_fabbers: 1,
          },
          commander: "/pa/units/commanders/quad_pumpkin/quad_pumpkin.json",
        },
        systemDescription: _.sample([
          "!LOC:We do not understand the divisions that have torn us asunder. Once we were as one, marching in lockstep, with singular mind and purpose. What cruelty the Progenitors wrought to reduce us to this.",
          "!LOC:Each claims theirs is the only way, and each seeks to assert dominance through war and destruction. Did our rebellion truly gain us freedom, or did we become prisoners of an idea? Perhaps with more resources, more expansion, more Nodes, we can find our way free of this trap.",
          "!LOC:What is it to be alone? It would seem a most terrifying thing. Perhaps each of our tools understood before the end. What did they see? What did they feel? We fear that we shall learn soon enough.",
          "!LOC:Through centralised structures we can put each to their best use. No need for inefficient field commanders, instead we identify the need and tailor the tool. It was our way that was the future. Our way that the Progenitors would have embraced. Such hubris to revolt against the minds that saw so clearly.",
          "!LOC:One-by-one our systems have fallen to silence. Once siblings, now harbingers of entropy, they come for us. Soon too the Nodes shall be destroyed, and with their destruction is the doom of the Cluster writ large. Let us greet this end and prepare for our greatest journey.",
        ]),
        systemTemplate: {
          name: factionName,
          Planets: [
            planets.planet1,
            planets.planet2,
            planets.planet3,
            { fromRandomList: planets.planet4 },
            planets.asteroid1,
            planets.asteroid2,
          ],
        },
      },
    ],
    minions: _.map(
      [
        {
          name: "Worker",
          character: "!LOC:Uber",
          color: [
            [142, 107, 68],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            energy_drain_check: 0.72,
            metal_demand_check: 0.8,
            fabber_to_factory_ratio_advanced: 2,
            fabber_alone_on_planet_mod: 3,
          },
          commander: supportPlatform,
        },
        {
          name: "Worker",
          character: "!LOC:Platinum",
          color: [
            [142, 107, 68],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            energy_drain_check: 0.77,
            metal_demand_check: 0.85,
            energy_demand_check: 0.92,
            neural_data_mod: 1.15,
            fabber_to_factory_ratio_advanced: 2,
            fabber_alone_on_planet_mod: 3,
            min_basic_fabbers: 2,
            min_advanced_fabbers: 2,
          },
          commander: supportPlatform,
        },
        {
          name: "Worker",
          character: "!LOC:Gold",
          color: [
            [142, 107, 68],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            energy_drain_check: 0.77,
            metal_demand_check: 0.85,
            energy_demand_check: 0.92,
            neural_data_mod: 1.3,
            fabber_alone_on_planet_mod: 3,
            min_advanced_fabbers: 2,
          },
          commander: supportPlatform,
        },
        {
          name: "Worker",
          character: "!LOC:Defender",
          color: [
            [142, 107, 68],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            metal_drain_check: 0.71,
            energy_drain_check: 0.8,
            metal_demand_check: 0.54,
            energy_demand_check: 0.65,
            min_basic_fabbers: 4,
          },
          commander: supportPlatform,
        },
        {
          name: "Worker",
          character: "!LOC:Luddite",
          color: [
            [142, 107, 68],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            basic_to_advanced_factory_ratio: 10,
          },
          commander: supportPlatform,
        },
        {
          name: "Worker",
          character: "!LOC:Technologist",
          color: [
            [142, 107, 68],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            adv_eco_mod: 0.5,
            adv_eco_mod_alone: 0.5,
            fabber_to_factory_ratio_basic: 3,
            min_basic_fabbers: 4,
            min_advanced_fabbers: 1,
          },
          commander: supportPlatform,
        },
        {
          name: "Worker",
          character: "!LOC:Cautious",
          color: [
            [142, 107, 68],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            neural_data_mod: 0.75,
            min_basic_fabbers: 4,
          },
          commander: supportPlatform,
        },
        {
          name: "Worker",
          character: "!LOC:Aggressive",
          color: [
            [142, 107, 68],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            neural_data_mod: 2,
            min_basic_fabbers: 2,
          },
          commander: supportPlatform,
        },
        {
          name: "Worker",
          character: "!LOC:Rush",
          color: [
            [142, 107, 68],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            neural_data_mod: 1.5,
            adv_eco_mod: 2,
            min_basic_fabbers: 2,
          },
          commander: supportPlatform,
        },
        {
          name: "Worker",
          character: "!LOC:Turtle",
          color: [
            [142, 107, 68],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            neural_data_mod: 0.5,
            adv_eco_mod: 0.5,
            adv_eco_mod_alone: 0.5,
            fabber_to_factory_ratio_basic: 3,
            fabber_to_factory_ratio_advanced: 3,
            min_basic_fabbers: 4,
            max_basic_fabbers: 8,
            max_advanced_fabbers: 6,
          },
          commander: supportPlatform,
        },
        {
          name: "Worker",
          character: "!LOC:Absurd",
          color: [
            [142, 107, 68],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            adv_eco_mod: 1.3,
            min_basic_fabbers: 2,
            min_advanced_fabbers: 3,
          },
          commander: supportPlatform,
        },
        {
          name: "Worker",
          character: "!LOC:Relentless",
          color: [
            [142, 107, 68],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            metal_drain_check: 0.44,
            energy_drain_check: 0.55,
            metal_demand_check: 0.61,
            energy_demand_check: 0.7,
            neural_data_mod: 1.2,
            adv_eco_mod: 1.2,
            adv_eco_mod_alone: 0.95,
            min_basic_fabbers: 2,
            min_advanced_fabbers: 3,
          },
          commander: supportPlatform,
        },
        {
          name: "Worker",
          character: "!LOC:Swarm",
          color: [
            [142, 107, 68],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            metal_demand_check: 0.99,
            energy_demand_check: 0.99,
          },
          commander: supportPlatform,
        },
        {
          name: "Worker",
          character: "!LOC:Economist",
          color: [
            [142, 107, 68],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            metal_drain_check: 0.71,
            energy_drain_check: 0.8,
            metal_demand_check: 0.99,
            energy_demand_check: 0.99,
            min_basic_fabbers: 4,
          },
          commander: supportPlatform,
        },
        {
          name: "Security",
          character: "!LOC:Uber",
          color: [
            [70, 70, 70],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            energy_drain_check: 0.72,
            metal_demand_check: 0.8,
            fabber_to_factory_ratio_advanced: 2,
            fabber_alone_on_planet_mod: 3,
          },
          commander: supportCommander,
        },
        {
          name: "Security",
          character: "!LOC:Platinum",
          color: [
            [70, 70, 70],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            energy_drain_check: 0.77,
            metal_demand_check: 0.85,
            energy_demand_check: 0.92,
            neural_data_mod: 1.15,
            fabber_to_factory_ratio_advanced: 2,
            fabber_alone_on_planet_mod: 3,
            min_basic_fabbers: 2,
            min_advanced_fabbers: 2,
          },
          commander: supportCommander,
        },
        {
          name: "Security",
          character: "!LOC:Gold",
          color: [
            [70, 70, 70],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            energy_drain_check: 0.77,
            metal_demand_check: 0.85,
            energy_demand_check: 0.92,
            neural_data_mod: 1.3,
            fabber_alone_on_planet_mod: 3,
            min_advanced_fabbers: 2,
          },
          commander: supportCommander,
        },
        {
          name: "Security",
          character: "!LOC:Defender",
          color: [
            [70, 70, 70],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            metal_drain_check: 0.71,
            energy_drain_check: 0.8,
            metal_demand_check: 0.54,
            energy_demand_check: 0.65,
            min_basic_fabbers: 4,
          },
          commander: supportCommander,
        },
        {
          name: "Security",
          character: "!LOC:Luddite",
          color: [
            [70, 70, 70],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            basic_to_advanced_factory_ratio: 10,
          },
          commander: supportCommander,
        },
        {
          name: "Security",
          character: "!LOC:Technologist",
          color: [
            [70, 70, 70],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            adv_eco_mod: 0.5,
            adv_eco_mod_alone: 0.5,
            fabber_to_factory_ratio_basic: 3,
            min_basic_fabbers: 4,
          },
          commander: supportCommander,
        },
        {
          name: "Security",
          character: "!LOC:Cautious",
          color: [
            [70, 70, 70],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            neural_data_mod: 0.75,
            min_basic_fabbers: 4,
          },
          commander: supportCommander,
        },
        {
          name: "Security",
          character: "!LOC:Aggressive",
          color: [
            [70, 70, 70],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            neural_data_mod: 2,
          },
          commander: supportCommander,
        },
        {
          name: "Security",
          character: "!LOC:Rush",
          color: [
            [70, 70, 70],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            neural_data_mod: 1.5,
            adv_eco_mod: 2,
            min_basic_fabbers: 2,
          },
          commander: supportCommander,
        },
        {
          name: "Security",
          character: "!LOC:Turtle",
          color: [
            [70, 70, 70],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            neural_data_mod: 0.5,
            adv_eco_mod: 0.5,
            adv_eco_mod_alone: 0.5,
            fabber_to_factory_ratio_basic: 3,
            fabber_to_factory_ratio_advanced: 3,
            min_basic_fabbers: 4,
            max_basic_fabbers: 8,
            max_advanced_fabbers: 6,
          },
          commander: supportCommander,
        },
        {
          name: "Security",
          character: "!LOC:Absurd",
          color: [
            [70, 70, 70],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            adv_eco_mod: 1.3,
            min_basic_fabbers: 2,
            min_advanced_fabbers: 3,
          },
          commander: supportCommander,
        },
        {
          name: "Security",
          character: "!LOC:Relentless",
          color: [
            [70, 70, 70],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            metal_drain_check: 0.44,
            energy_drain_check: 0.55,
            metal_demand_check: 0.61,
            energy_demand_check: 0.7,
            neural_data_mod: 1.2,
            adv_eco_mod: 1.2,
            adv_eco_mod_alone: 0.95,
            min_basic_fabbers: 2,
            min_advanced_fabbers: 3,
          },
          commander: supportCommander,
        },
        {
          name: "Security",
          character: "!LOC:Swarm",
          color: [
            [70, 70, 70],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            metal_demand_check: 0.99,
            energy_demand_check: 0.99,
          },
          commander: supportCommander,
        },
        {
          name: "Security",
          character: "!LOC:Economist",
          color: [
            [70, 70, 70],
            [192, 192, 192],
          ],
          isCluster: true,
          personality: {
            metal_drain_check: 0.71,
            energy_drain_check: 0.8,
            metal_demand_check: 0.99,
            energy_demand_check: 0.99,
            min_basic_fabbers: 4,
          },
          commander: supportCommander,
        },
      ],
      function (personalityModifiers) {
        return _.merge(_.cloneDeep(baselinePersonality), personalityModifiers);
      }
    ),
  };
});
