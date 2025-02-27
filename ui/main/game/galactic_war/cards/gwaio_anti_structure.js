define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/unit_groups.js",
], function (gwoCard, gwoGroup) {
  return {
    visible: _.constant(true),
    describe: _.constant(
      "!LOC:구조물 방어 탄약 기술은 구조물에 입히는 모든 피해를 두 배로 늘리지만, 지휘관을 제외한 이동형 유닛에 입히는 피해는 절반으로 줄입니다."
    ),
    summarize: _.constant("!LOC:Anti-Structure Ammo Tech"),
    icon: _.constant(
      "coui://ui/main/game/galactic_war/gw_play/img/tech/gwc_structure.png"
    ),
    audio: function () {
      return {
        found: "/VO/Computer/gw/board_tech_available_ammunition",
      };
    },
    getContext: gwoCard.getContext,
    deal: function (system, context, inventory) {
      var chance = 70;
      const hasAntiTech = _.some(
        model.game().inventory().cards(),
        function (card) {
          return _.startsWith(card.id, "gwaio_anti_");
        }
      );
      if (inventory.hasCard("gwaio_anti_commander")) {
        chance = 0;
      } else if (hasAntiTech) {
        chance /= 2;
      }
      return { chance: chance };
    },
    buff: function (inventory) {
      const mods = _.flatten(
        _.map(gwoGroup.ammo, function (ammo) {
          return [
            {
              file: ammo,
              path: "armor_damage_map.AT_Structure",
              op: "multiplyOrAdd",
              value: 2.0,
            },
            {
              file: ammo,
              path: "armor_damage_map.AT_Air",
              op: "multiplyOrAdd",
              value: 0.5,
            },
            {
              file: ammo,
              path: "armor_damage_map.AT_Bot",
              op: "multiplyOrAdd",
              value: 0.5,
            },
            {
              file: ammo,
              path: "armor_damage_map.AT_Hover",
              op: "multiplyOrAdd",
              value: 0.5,
            },
            {
              file: ammo,
              path: "armor_damage_map.AT_Orbital",
              op: "multiplyOrAdd",
              value: 0.5,
            },
            {
              file: ammo,
              path: "armor_damage_map.AT_Naval",
              op: "multiplyOrAdd",
              value: 0.5,
            },
            {
              file: ammo,
              path: "armor_damage_map.AT_Vehicle",
              op: "multiplyOrAdd",
              value: 0.5,
            },
          ];
        })
      );
      inventory.addMods(mods);
    },
    dull: function () {},
  };
});
