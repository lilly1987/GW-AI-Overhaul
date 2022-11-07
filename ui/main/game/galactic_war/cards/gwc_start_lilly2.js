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
            return '!LOC:lilly Commander2';
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
			//console.log("params p : "+_.pairs(params)); 
            if (inventory.lookupCard(CARD) === 0)
            {
                // Make sure we only do the start buff/dull once
                var buffCount = inventory.getTag('', 'buffCount', 0);
                if (!buffCount) {
                    GWCStart.buff(inventory);
                    inventory.maxCards(inventory.maxCards() + 8);
					//----------------------------------------------------------
                    _.forEach(context.minions, function(minion)
                    {
						minion.personality.micro_type=2;
						minion.personality.percent_vehicle=0.2;
						minion.personality.percent_land=0.2;
						minion.personality.percent_air=0.2;
						minion.personality.percent_naval=0.2;
						minion.personality.percent_orbital=0.2;
						minion.personality.metal_drain_check=1;
						minion.personality.energy_drain_check=1;
						minion.personality.metal_demand_check=1;
						minion.personality.energy_demand_check=1;
						minion.personality.personality_tags=_.pull(minion.personality.personality_tags, 'SlowerExpansion');
                        inventory.minions.push(minion);
                    });
                    var minionSpecs = _.filter(_.pluck(context.minions, 'commander'));
					console.log('minionSpecs :' + minionSpecs);
                    inventory.addUnits(minionSpecs);
					//----------------------------------------------------------
                    var mods = [];
                    function modspush(item, path,op,value) {
                        mods.push({
                            file: item,
                            path: path,
                            op: op,
                            value: value
                        });
                    }
					var n0=4;
					var n1=10;
					var n2=100;
					var n25=500;
					var n3=1000;
					//----------------------------------------------------------
                    modspush(
                        "/pa/units/orbital/orbital_launcher/orbital_launcher.json",
                        "buildable_types",
                         "add",
                        "| (Orbital & FactoryBuild)",
                    );
                    //----------------------------------------------------------
                    var commanders =
                    [
                        '/pa/units/commanders/base_commander/base_commander.json',
                    ];
                    var modUnit = function(item)
                    {
                        modspush(item ,'max_health','multiply',n1);
                        modspush(item ,'production.energy','multiply',n1);
                        modspush(item ,'production.metal','multiply',n1);
                        modspush(item ,'storage.energy','multiply',n1);
                        modspush(item ,'storage.metal','multiply',n1);
                    };
                    _.forEach(commanders, modUnit);
					//----------------------------------------------------------
                    var commanders =
                    [
						commander,
                    ];
                    var modUnit = function(item)
                    {
                        modspush(item ,'navigation.turn_speed','multiply',n1);
                        modspush(item ,'max_health','multiply',n1);
                        modspush(item ,'production.energy','multiply',n1);
                        modspush(item ,'production.metal','multiply',n1);
                        modspush(item ,'storage.energy','multiply',n1);
                        modspush(item ,'storage.metal','multiply',n1);
                        //----------------------------------------------------------
                        var newBuildArm = unit + '.player.' + (inventory.mods().length + mods.length).toString();
                        modspush(item ,'tools.0.spec_id','clone',newBuildArm);
                        modspush(newBuildArm ,'construction_demand.energy','multiply',1000);
                        modspush(newBuildArm ,'construction_demand.metal','multiply',1000);
                        modspush(newBuildArm ,'yaw_rate','multiply',4);
                        modspush(newBuildArm ,'pitch_rate','multiply',4);
                        modspush(newBuildArm ,'yaw_range','multiply',2);
                        modspush(newBuildArm ,'pitch_range','multiply',4);
                        modspush(newBuildArm ,'max_range','multiply',1000);
                        modspush(newBuildArm ,'assist_layers','multiply',"WL_Orbital");
                        modspush(item ,'tools.0.spec_id','replace',newBuildArm);
                        modspush(item ,'tools.0.spec_id','tag',' ');
                        //----------------------------------------------------------
                        // /pa/units/commanders/base_commander/base_commander_tool_aa_weapon.json
                        var newwp = unit + '.player.' + (inventory.mods().length + mods.length).toString();
                        modspush(item ,'tools.3.spec_id','clone',newwp);
                        modspush(item ,'tools.3.spec_id','replace',newwp);
                        modspush(item ,'tools.3.spec_id','tag',' ');

                        modspush(newwp ,'target_layers','push',[
                            "WL_LandHorizontal",
                            "WL_Seafloor"
                        ]);
                        modspush(newwp ,'target_priorities','push',[
                            "Mobile - Air",
                            "Mobile",
                            "Structure - Wall"
                        ]);

                        // /pa/units/commanders/base_commander/base_commander_aa_ammo.json
                        var newamm = newwp + '.player.' + (inventory.mods().length + mods.length).toString();
                        modspush(newwp ,'ammo_id','clone',newamm);
                        modspush(newwp ,'ammo_id','replace',newamm);
                        modspush(newwp ,'ammo_id','tag',' ');

                        modspush(newamm ,'damage','multiply',10);
                        modspush(newamm ,'splash_damage','multiply',10);
                        modspush(newamm ,'splash_radius','multiply',10);
                        modspush(newamm ,'full_damage_splash_radius','multiply',10);
                    };
                    _.forEach(commanders, modUnit);
					//----------------------------------------------------------
                    var weaps =
                    [
                        '/pa/tools/uber_cannon/uber_cannon.json',
                        '/pa/units/commanders/base_commander/base_commander_tool_weapon.json',
                        //'/pa/units/commanders/base_commander/base_commander_tool_weapon_lilly.json',
                    ];
                    var modWeap = function(item)
                    {
                        modspush(item ,'ammo_capacity','multiply',0.125);
                        modspush(item ,'ammo_demand','multiply',0.125);
                        modspush(item ,'ammo_per_shot','multiply',0.125);
                        modspush(item ,'rate_of_fire','multiply',8.0);
                    };
                    _.forEach(weaps, modWeap);
					//----------------------------------------------------------
                    var ammos =
                    [
                        '/pa/units/commanders/base_commander/base_commander_ammo.json',
                        //'/pa/units/commanders/base_commander/base_commander_ammo_lilly.json',
                    ];
                    var modammo = function(item)
                    {
                        modspush(item ,'initial_velocity','multiply',2.0);
                        modspush(item ,'max_velocity','multiply',2.0);
                    };
                    _.forEach(ammos, modammo);
                    //----------------------------------------------------------
					inventory.addMods(mods);
					//----------------------------------------------------------
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
