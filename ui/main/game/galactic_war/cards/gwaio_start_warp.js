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
    summarize: function () {
      const english = _.includes(i18n.detectLanguage(), "en");
      if (english) {
        return "!LOC:Warp Commander";
      }
      return loc("!LOC:Teleporter") + " " + loc("!LOC:Commander"); // scuffed translation using existing strings
    },
    icon: function () {
      return gwoCard.loadoutIcon(CARD.id);
    },
    describe: _.constant(
      "!LOC:사령관은 무기 범위 내에 있는 자신과 모든 유닛을 시스템 내 어디든지 대량 순간이동시킬 수 있지만 이후 공격에 매우 취약합니다."
    ),
    hint: function () {
      return {
        icon: "coui://ui/main/game/galactic_war/gw_play/img/tech/gwc_commander_locked.png",
        description: "!LOC:Warp Commander",
      };
    },
    deal: gwoCard.startCard,
    buff: function (inventory) {
      if (inventory.lookupCard(CARD) === 0) {
        var buffCount = inventory.getTag("", "buffCount", 0);
        if (!buffCount) {
          GWCStart.buff(inventory);
          inventory.addMods([
            {
              file: gwoUnit.commander,
              path: "command_caps",
              op: "push",
              value: "ORDER_MassTeleport",
            },
            {
              file: gwoUnit.commander,
              path: "mass_teleporter",
              op: "replace",
              value: {
                radius: 100,
                phasing_duration: 30,
                phasing_health_frac: 0.01,
                energy_drain: 60000,
                energy_cost: 600000,
                unit_cap: 1000,
                target_types: "Mobile",
              },
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
