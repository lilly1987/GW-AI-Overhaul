// !LOCNS:galactic_war
define([
    'module',
    'shared/gw_common',
    'shared/gw_factions',
    'cards/gwc_start',
], function(
    module,
    GW,
    GWFactions,
    GWCStart
) {
    var CARD = { id: /[^\/]+$/.exec(module.id).pop() };

    return {
        visible: function(params) { return false; },
        summarize: function(params)
        {
            return '!LOC:lilly Commander';
        },
        icon: function(params)
        {
            return 'coui://ui/main/game/galactic_war/shared/img/red-commander.png';
        },
        describe: function(params) { return '!LOC:lilly.'; },
        hint: function()
        {
            return {
                icon: 'coui://ui/main/game/galactic_war/gw_play/img/tech/gwc_commander_locked.png',
                description: '!LOC:lilly.'
            };
        },
        getContext: function(galaxy, inventory)
        {
            return {
                faction: inventory.getTag('global', 'playerFaction') || 0
            };
        },
        deal: function(system, context, inventory)
        {
            var minions = _.shuffle(GWFactions[context.faction].minions.slice(0));
            return {
                params:
                {
                    minions: minions.slice(0, 4),
                    allowOverflow: true
                },
                chance: 0
            };
        },
        buff: function(inventory, context)
        {
            if (inventory.lookupCard(CARD) === 0)
            {
                // Make sure we only do the start buff/dull once
                var buffCount = inventory.getTag('', 'buffCount', 0);
                if (!buffCount) {
                    GWCStart.buff(inventory);
                    //inventory.maxCards(inventory.maxCards() - 1);
                    inventory.addUnits(
                    [
                        '/pa/units/land/vehicle_factory/vehicle_factory.json',
                        '/pa/units/land/tank_light_laser/tank_light_laser.json'
                    ]);
                    _.forEach(context.minions, function(minion)
                    {
                        inventory.minions.push(minion);
                    });
                    var minionSpecs = _.filter(_.pluck(context.minions, 'commander'));
                    inventory.addUnits(minionSpecs);
					//
					/*
                    var mods = [];
                    var modUnit = function(unit)
                    {
                        mods.push(
                        {
                            file: unit,
                            path: 'navigation.move_speed',
                            op: 'multiply',
                            value: 10.0
                        });
                        mods.push(
                        {
                            file: unit,
                            path: 'navigation.brake',
                            op: 'multiply',
                            value: 10.0
                        });
                        mods.push(
                        {
                            file: unit,
                            path: 'navigation.acceleration',
                            op: 'multiply',
                            value: 10.0
                        });
                        mods.push(
                        {
                            file: unit,
                            path: 'navigation.turn_speed',
                            op: 'multiply',
                            value: 10.0
                        });
                        mods.push(
                        {
                            file: unit,
                            path: 'max_health',
                            op: 'multiply',
                            value: 10.0
                        });
                    };
                    _.forEach(units, modUnit);*/
					//
                }
                ++buffCount;
                inventory.setTag('', 'buffCount', buffCount);
            }
            else
            {
                // Don't clog up a slot.
                inventory.maxCards(inventory.maxCards() + 1);
                GW.bank.addStartCard(CARD);
            }
        },
        dull: function(inventory)
        {
            if (inventory.lookupCard(CARD) === 0)
            {
                var buffCount = inventory.getTag('', 'buffCount', 0);
                if (buffCount)
                {
                    // Perform dulls here

                    inventory.setTag('', 'buffCount', undefined);
                }
            }
        }
    };
});
