define([
  "shared/gw_common",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/unit_groups.js",
], function (GW, gwaioCards, gwaioGroups) {
  return {
    visible: _.constant(true),
    describe: _.constant(
      "!LOC:Improved Energy Weapons tech reduces energy costs for energy based weapons by 75%"
    ),
    summarize: _.constant("!LOC:Improved Energy Weapons"),
    icon: _.constant(
      "coui://ui/main/game/galactic_war/gw_play/img/tech/gwc_energy.png"
    ),
    audio: function () {
      return {
        found: "/VO/Computer/gw/board_tech_available_weapon_upgrade",
      };
    },
    getContext: gwaioCards.getContext,
    deal: function (system, context) {
      var chance = 0;
      var dist = system.distance();
      if (
        (context.totalSize <= GW.balance.numberOfSystems[0] && dist > 4) ||
        (context.totalSize <= GW.balance.numberOfSystems[1] && dist > 6) ||
        (context.totalSize <= GW.balance.numberOfSystems[2] && dist > 9) ||
        (context.totalSize <= GW.balance.numberOfSystems[3] && dist > 10) ||
        dist > 12
      ) {
        chance = 166;
      } else if (
        (context.totalSize <= GW.balance.numberOfSystems[0] && dist > 2) ||
        (context.totalSize <= GW.balance.numberOfSystems[1] && dist > 3) ||
        (context.totalSize <= GW.balance.numberOfSystems[2] && dist > 5) ||
        (context.totalSize <= GW.balance.numberOfSystems[3] && dist > 6) ||
        dist > 7
      ) {
        chance = 333;
      } else {
        chance = 33;
      }
      return { chance: chance };
    },
    buff: function (inventory) {
      var mods = _.flatten(
        _.map(gwaioGroups.energyWeapons, function (weapon) {
          return [
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
          ];
        })
      );
      inventory.addMods(mods);
    },
    dull: function () {
      //empty
    },
  };
});
