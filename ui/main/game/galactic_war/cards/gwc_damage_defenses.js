define([
  "shared/gw_common",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (GW, gwaioCards, gwaioUnits) {
  return {
    visible: _.constant(true),
    describe: _.constant(
      "!LOC:Defense Ammunition Tech increases damage of all defensive structures by 25%"
    ),
    summarize: _.constant("!LOC:Defense Ammunition Tech"),
    icon: _.constant(
      "coui://ui/main/game/galactic_war/gw_play/img/tech/gwc_turret.png"
    ),
    audio: function () {
      return {
        found: "/VO/Computer/gw/board_tech_available_ammunition",
      };
    },
    getContext: gwaioCards.getContext,
    deal: function (system, context) {
      var chance = 0;
      var dist = system.distance();
      if (
        context.totalSize <= GW.balance.numberOfSystems[0] ||
        context.totalSize <= GW.balance.numberOfSystems[1]
      ) {
        chance = 12;
      } else if (
        (context.totalSize <= GW.balance.numberOfSystems[2] && dist > 6) ||
        (context.totalSize <= GW.balance.numberOfSystems[3] && dist > 9) ||
        dist > 12
      ) {
        chance = 120;
      } else {
        chance = 24;
      }
      return { chance: chance };
    },
    buff: function (inventory) {
      var ammos = [
        gwaioUnits.landMineAmmo,
        gwaioUnits.flakAmmo,
        gwaioUnits.galataAmmo,
        gwaioUnits.laserDefenseTowerAdvancedAmmo,
        gwaioUnits.singleLaserDefenseTowerAmmo,
        gwaioUnits.laserDefenseTowerAmmo,
        gwaioUnits.catapultAmmo,
        gwaioUnits.anchorAmmoAG,
        gwaioUnits.anchorAmmoAO,
        gwaioUnits.umbrellaAmmo,
        gwaioUnits.torpedoLauncherAdvancedLandAmmo,
        gwaioUnits.torpedoLauncherAdvancedWaterAmmo,
        gwaioUnits.torpedoLauncherAdvancedAmmo,
        gwaioUnits.torpedoLauncherLandAmmo,
        gwaioUnits.torpedoLauncherWaterAmmo,
        gwaioUnits.torpedoLauncherAmmo,
      ];
      var mods = [];
      ammos.forEach(function (ammo) {
        mods.push({
          file: ammo,
          path: "damage",
          op: "multiply",
          value: 1.25,
        });
      });
      inventory.addMods(mods);
    },
    dull: function () {
      //empty
    },
  };
});
