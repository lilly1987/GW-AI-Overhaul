define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return {
    visible: _.constant(true),
    describe: _.constant(
      loc(
        "!LOC:고급 제작 로봇 업그레이드 기술은 고급 제작자에 지원 사령관의 무기를 장착해줍니다."
      ) +
        "<br> <br>" +
        loc("!LOC:Does not use a Data Bank.")
    ),
    summarize: _.constant("!LOC:Advanced Fabrication Bot Upgrade Tech"),
    icon: _.constant(
      "coui://ui/mods/com.pa.quitch.gwaioverhaul/gw_play/img/tech/gwc_metal_upgrade.png"
    ),
    audio: function () {
      return {
        found: "/VO/Computer/gw/board_tech_available_bot",
      };
    },
    getContext: gwoCard.getContext,
    deal: function (system, context, inventory) {
      var chance = 0;
      if (gwoCard.hasUnit(inventory.units(), gwoUnit.botFactoryAdvanced)) {
        chance = 60;
      }
      return {
        params: {
          allowOverflow: true,
        },
        chance: chance,
      };
    },
    buff: function (inventory) {
      inventory.maxCards(inventory.maxCards() + 1);
      inventory.addMods([
        {
          file: gwoUnit.botFabberAdvanced,
          path: "tools",
          op: "push",
          value: {
            spec_id:
              "/pa/units/land/bot_support_commander/bot_support_commander_tool_weapon.json",
            aim_bone: "bone_turret",
            muzzle_bone: "socket_rightMuzzle",
            primary_weapon: true,
          },
        },
        {
          file: gwoUnit.botFabberAdvanced,
          path: "command_caps",
          op: "push",
          value: "ORDER_Attack",
        },
      ]);
    },
    dull: function () {},
  };
});
