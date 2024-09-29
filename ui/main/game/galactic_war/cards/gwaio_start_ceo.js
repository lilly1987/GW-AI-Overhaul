define([
  "module",
  "cards/gwc_start",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/bank.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (module, GWCStart, gwoBank, gwoCard, gwoUnit) {
  const CARD = { id: /[^/]+$/.exec(module.id).pop() };
  return {
    visible: _.constant(false),
    summarize: _.constant("!LOC:CEO Commander"),
    icon: function () {
      return gwoCard.loadoutIcon(CARD.id);
    },
    describe: _.constant(
      "!LOC:부하들에게 권한을 부여하고 승리로 가는 길을 위임하세요. 지휘관은 대령 대리 지휘관을 만들 수 있으며, 그들은 우버 캐논으로 무장합니다. 비용이 반으로 줄어듭니다."
    ),
    hint: function () {
      return {
        icon: "coui://ui/main/game/galactic_war/gw_play/img/tech/gwc_commander_locked.png",
        description: "!LOC:CEO Commander",
      };
    },
    deal: gwoCard.startCard,
    buff: function (inventory) {
      if (inventory.lookupCard(CARD) === 0) {
        var buffCount = inventory.getTag("", "buffCount", 0);
        if (!buffCount) {
          GWCStart.buff(inventory);
          inventory.addUnits(gwoUnit.colonel);

          inventory.addMods([
            {
              file: gwoUnit.commander,
              path: "buildable_types",
              op: "add",
              value: " | SupportCommander & Custom58",
            },
            {
              file: gwoUnit.colonel,
              path: "tools",
              op: "push",
              value: {
                spec_id: gwoUnit.commanderSecondary,
                aim_bone: "bone_turret",
                muzzle_bone: "socket_rightMuzzle",
                secondary_weapon: true,
              },
            },
            {
              file: gwoUnit.colonel,
              path: "command_caps",
              op: "push",
              value: "ORDER_FireSecondaryWeapon",
            },
            {
              file: gwoUnit.colonel,
              path: "build_metal_cost",
              op: "multiply",
              value: 0.5,
            },
          ]);

          inventory.addAIMods([
            {
              type: "fabber",
              op: "load",
              value: CARD.id + ".json",
            },
          ]);
        } else {
          inventory.maxCards(inventory.maxCards() + 1);
        }
        ++buffCount;
        inventory.setTag("", "buffCount", buffCount);
      } else {
        inventory.maxCards(inventory.maxCards() + 1);
        gwoBank.addStartCard(CARD);
      }
    },
    dull: function (inventory) {
      gwoCard.applyDulls(CARD, inventory);
    },
  };
});
