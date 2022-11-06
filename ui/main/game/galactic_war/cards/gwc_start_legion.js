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
            return '!LOC:lilly legion';
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
					//----------------------------------------------------------
					loadScript("coui://ui/mods/com.pa.legion-expansion/common.js");
					console.log("loadScript : "+legion.commanders); 
					inventory.setTag('global', 'commander', _.sample(legion.commanders)); //건물 못지음
					//----------------------------------------------------------
					var commander = inventory.getTag('global', 'commander');
					console.log('commander :' + commander);
					console.log('commander t :' + typeof commander);
					//----------------------------------------------------------
					$.getJSON("coui://pa/units/unit_list_legion.json").done(function (text) {
						//console.log("getJSON : "+_.pairs(text)); 
						//console.log("getJSON : "+text.units); 
						inventory.addUnits(text.units);
	                }).fail(function () {
						console.error('getJSON fail1');
					});//----------------------------------------------------------
					$.getJSON("coui://pa/units/unit_list.json").done(function (text) {
						//console.log("getJSON : "+_.pairs(text)); 
						//console.log("getJSON : "+text.units); 
						inventory.addUnits(text.units);
	                }).fail(function () {
						console.error('getJSON fail2');
					});
					
					//----------------------------------------------------------
                }
                else
                {
                    // Don't clog up a slot.
                    inventory.maxCards(inventory.maxCards() + 1);
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
