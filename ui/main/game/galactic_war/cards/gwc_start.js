define([
    "shared/gw_factions",
  "shared/gw_common",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/unit_groups.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/faction/cluster_setup.js",
  "cards/gwc_minion",
], function (GWFactions,GW, gwoUnit, gwoGroup, gwoCluster,gwc_minion) {
  return {
    visible: _.constant(false),
    summarize: _.constant("!LOC:Default Commander"),
    icon: _.constant(
      "coui://ui/main/game/galactic_war/shared/img/red-commander.png"
    ),
    describe: _.constant(""),
    deal: _.constant(false),
    buff: function (inventory) {
      inventory.maxCards(
        inventory.maxCards() + GW.balance.initialCardSlots + 1
      );

      const playerIsCluster = inventory.getTag("global", "playerFaction") === 4;
      if (playerIsCluster) {
        inventory.addMods(gwoCluster.clusterCommanders);
      }

      const commander = inventory.getTag("global", "commander");
      const starterUnits = gwoGroup.structuresEcoBasic.concat(
        gwoGroup.structuresDefencesBasic,
        gwoGroup.structuresIntelBasic,
        gwoGroup.navalBasic,
        gwoGroup.orbitalBasic,
        gwoUnit.teleporter,
        commander
      );
      inventory.addUnits(starterUnits);
          
            //
     //_.times(3, function () {
     // const minion = _.cloneDeep(_.sample(GWFactions[inventory.getTag("global", "playerFaction")].minions));
     // inventory.minions.push(minion);
     // if (minion.commander) {
     //   inventory.addUnits([minion.commander]);
     // }
     //}
          //
          inventory.addUnits(
            gwoGroup.air.concat(
              gwoGroup.bots,
              gwoGroup.naval,
              gwoGroup.orbital,
              gwoGroup.vehicles,
              
              gwoGroup.units,
              gwoGroup.titans
              
            )
          );

          //
          const mods = [
            //{
            //  file: gwoUnit.colonel,
            //  path: "max_health",
            //  op: "multiply",
            //  value: 10,
            //},
            {
              file: gwoUnit.commander,
              path: "navigation.move_speed",
              op: "multiply",
              value: 5,
            },
            {
              file: gwoUnit.commander,
              path: "navigation.brake",
              op: "multiply",
              value: 5,
            },
            {
              file: gwoUnit.commander,
              path: "navigation.acceleration",
              op: "multiply",
              value: 5,
            },
            {
              file: gwoUnit.commander,
              path: "navigation.turn_speed",
              op: "multiply",
              value: 5,
            },
            {
              file: gwoUnit.commander,
              path: "storage.energy",
              op: "multiply",
              value: 2,
            },
            {
              file: gwoUnit.commander,
              path: "storage.metal",
              op: "multiply",
              value: 2,
            },
            {
              file: gwoUnit.commander,
              path: "max_health",
              op: "multiply",
              value: 100,
            },
            //{
            //  file: gwoUnit.commander,
            //  path: "production.energy",
            //  op: "multiply",
            //  value: 2,
            //},
            //{
            //  file: gwoUnit.commander,
            //  path: "production.metal",
            //  op: "multiply",
            //  value: 2,
            //},
          ];
          const weapons = [gwoUnit.commanderSecondary, gwoUnit.commanderWeapon];
          _.forEach(weapons, function (weapon) {
            mods.push(
              {
                file: weapon,
                path: "ammo_capacity",
                op: "multiply",
                value: 0.25,
              },
              {
                file: weapon,
                path: "ammo_demand",
                op: "multiply",
                value: 0.25,
              },
              {
                file: weapon,
                path: "ammo_per_shot",
                op: "multiply",
                value: 0.25,
              },
              {
                file: weapon,
                path: "rate_of_fire",
                op: "multiply",
                value: 2.0,
              }
            );
          });
          //
  const buildArms = [
    gwoUnit.commanderBuildArm,
    gwoUnit.vehicleFabberAdvancedBuildArm,
    gwoUnit.vehicleFabberBuildArm,
    gwoUnit.vehicleFactoryAdvancedBuildArm,
    gwoUnit.vehicleFactoryBuildArm,
    gwoUnit.airFabberAdvancedBuildArm,
    gwoUnit.airFabberBuildArm,
    gwoUnit.airFactoryAdvancedBuildArm,
    gwoUnit.airFactoryBuildArm,
    gwoUnit.angelBuildArm,
    gwoUnit.barnacleBuildArm,
    gwoUnit.navalFabberAdvancedBuildArm,
    gwoUnit.navalFabberBuildArm,
    gwoUnit.navalFactoryAdvancedBuildArm,
    gwoUnit.navalFactoryBuildArm,
    gwoUnit.botFabberAdvancedBuildArm,
    gwoUnit.botFabberBuildArm,
    gwoUnit.botFactoryAdvancedBuildArm,
    gwoUnit.botFactoryBuildArm,
    gwoUnit.colonelBuildArm,
    gwoUnit.mendBuildArm,
    gwoUnit.stitchBuildArm,
    gwoUnit.antiNukeLauncherBuildArm,
    gwoUnit.nukeLauncherBuildArm,
    gwoUnit.orbitalFabberBuildArm,
    gwoUnit.orbitalFactoryBuildArm,
    gwoUnit.orbitalLauncherBuildArm,
    gwoUnit.unitCannonBuildArm,
    gwoUnit.airFactoryAdvancedBuildArm,
    gwoUnit.airFactoryBuildArm,
    gwoUnit.antiNukeLauncherBuildArm,
    gwoUnit.botFactoryAdvancedBuildArm,
    gwoUnit.botFactoryBuildArm,
    gwoUnit.navalFactoryAdvancedBuildArm,
    gwoUnit.navalFactoryBuildArm,
    gwoUnit.nukeLauncherBuildArm,
    gwoUnit.orbitalFactoryBuildArm,
    gwoUnit.orbitalLauncherBuildArm,
    gwoUnit.unitCannonBuildArm,
    gwoUnit.vehicleFactoryAdvancedBuildArm,
    gwoUnit.vehicleFactoryBuildArm,
  ];
            var modUnit2 = function(unit)
            {
              mods.push(
                {
                    file: unit,
                    path: 'construction_demand.energy',
                    //op: "add",
                    //value: 10000.0
                    op: 'multiply',
                    value: 100.0
                },
                {
                    file: unit,
                    path: 'construction_demand.metal',
                    //op: "add",
                    //value: 100.0
                    op: 'multiply',
                    value: 100.0
                },
                {
                  file: unit,
                  path: "yaw_rate",
                  op: "multiply",
                  value: 2
                },
                {
                  file: unit,
                  path: "pitch_rate",
                  op: "multiply",
                  value: 2
                },
                {
                  file: unit,
                  path: "pitch_range",
                  op: "multiply",
                  value: 4
                },
                {
                  file: unit,
                  path: "yaw_range",
                  op: "multiply",
                  value: 2
                },
                {
                  file: unit,
                  path: "max_range",
                  op: "multiply",
                  value: 100
                },
                {
                  file: unit,
                  path: "assist_layers",
                  op: "replace",
                  value: ["WL_AnyLayer"]
                },
                {
                  file: unit,
                  path: "reclaim_layers",
                  op: "replace",
                  value: ["WL_AnyLayer"]
                }
              );
            };
            _.forEach(buildArms, modUnit2);
          //
            var units =
            [
                gwoUnit.commander,
                '/pa/units/land/energy_plant/energy_plant.json',
                '/pa/units/land/energy_plant_adv/energy_plant_adv.json',
                '/pa/units/land/metal_extractor/metal_extractor.json',
                '/pa/units/land/metal_extractor_adv/metal_extractor_adv.json',
                '/pa/units/orbital/mining_platform/mining_platform.json',
            ];
            var modUnit = function(unit)
            {
                mods.push(
                {
                    file: unit,
                    path: 'production.energy',
                    op: 'multiply',
                    value: 100.0
                });
                mods.push(
                {
                    file: unit,
                    path: 'production.metal',
                    op: 'multiply',
                    value: 100.0
                });
            };
            _.forEach(units, modUnit);
          //
          inventory.addMods(mods);
          //
    },
    dull: function () {},
  };
});
