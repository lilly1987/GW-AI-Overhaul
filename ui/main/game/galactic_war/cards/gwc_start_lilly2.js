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
            if (inventory.lookupCard(CARD) === 0)
            {
                // Make sure we only do the start buff/dull once
                var buffCount = inventory.getTag('', 'buffCount', 0);
                if (!buffCount) {
                    GWCStart.buff(inventory);
                    inventory.maxCards(inventory.maxCards() + 8);
                    inventory.addUnits(
                    [
						"/pa/units/orbital/orbital_battleship/orbital_battleship.json",
                        '/pa/units/land/vehicle_factory/vehicle_factory.json',
                        '/pa/units/land/tank_light_laser/tank_light_laser.json'
                    ]);
					//----------------------------------------------------------
					//----------------------------------------------------------
      inventory.addMods([
        {
			
          file: "/pa/units/orbital/orbital_launcher/orbital_launcher.json",
          path: "buildable_types",
          op: "add",
          value: "| (Orbital & FactoryBuild)",
        },
      ]);
					//----------------------------------------------------------
                    _.forEach(context.minions, function(minion)
                    {
						//console.log("minion k : "+Object.keys(minion)); //minion k : name,character,color,econ_rate,personality,commander
						//console.log("minion v : "+Object.values(minion)); // TypeError: undefined is not a function
						//console.log("minion v : "+ _.values(minion)); // TypeError: undefined is not a function
						//console.log("minion p : "+ _.pairs(minion)); // name,Betadyne,character,!LOC:Space Invader,color,255,204,204,192,192,192,econ_rate,1,personality,[object Object],commander,/pa/units/commanders/raptor_betadyne/raptor_betadyne.json
						console.log("minion character : " + minion.character);//!LOC:Space Invader
						//console.log("minion.personality k : "+_.keys(minion.personality)); 
						//console.log("minion.personality v : "+_.values(minion.personality)); 
						console.log("minion.personality p : "+_.pairs(minion.personality)); 
//percent_vehicle,0,percent_bot,0,percent_air,0,percent_naval,0,percent_orbital,1,metal_drain_check,0.54,energy_drain_check,0.65,metal_demand_check,0.71,energy_demand_check,0.8,micro_type,0,go_for_the_kill,true,neural_data_mod,1,personality_tags,Default,GWAlly,SlowerExpansion,queller,adv_eco_mod,1.3,adv_eco_mod_alone,0.85,priority_scout_metal_spots,false,factory_build_delay_min,0,factory_build_delay_max,0,unable_to_expand_delay,0,enable_commander_danger_responses,false,per_expansion_delay,0,fabber_to_factory_ratio_basic,1,fabber_to_factory_ratio_advanced,1,fabber_alone_on_planet_mod,3,basic_to_advanced_factory_ratio,0,factory_alone_on_planet_mod,0.25,min_basic_fabbers,2,max_basic_fabbers,4,min_advanced_fabbers,3,max_advanced_fabbers,3
						/* minion.personality k : 
percent_vehicle,
percent_bot,
percent_air,
percent_naval,
percent_orbital,
metal_drain_check,
energy_drain_check,
metal_demand_check,
energy_demand_check,
micro_type,
go_for_the_kill,
neural_data_mod,
personality_tags,
adv_eco_mod,
adv_eco_mod_alone,
priority_scout_metal_spots,
factory_build_delay_min,
factory_build_delay_max,
unable_to_expand_delay,
enable_commander_danger_responses,
per_expansion_delay,
fabber_to_factory_ratio_basic,
fabber_to_factory_ratio_advanced,
fabber_alone_on_planet_mod,
basic_to_advanced_factory_ratio,
factory_alone_on_planet_mod,
min_basic_fabbers,
max_basic_fabbers,
min_advanced_fabbers,
max_advanced_fabbers
						*/
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
						//minion.personality.personality_tags=
						console.log("minion.personality_tags : "+ minion.personality.personality_tags); 
//						console.log("minion.personality_tags SlowerExpansion : "+ _.findIndex(minion.personality.personality_tags, 'SlowerExpansion')); 
						console.log("minion.personality_tags SlowerExpansion : "+ _.pull(minion.personality.personality_tags, 'SlowerExpansion')); 
						minion.personality.personality_tags=_.pull(minion.personality.personality_tags, 'SlowerExpansion');
                        inventory.minions.push(minion);
                    });
                    var minionSpecs = _.filter(_.pluck(context.minions, 'commander'));
					console.log('minionSpecs :' + minionSpecs);
                    inventory.addUnits(minionSpecs);
					//----------------------------------------------------------
                    var mods = [];
					//----------------------------------------------------------
					//----------------------------------------------------------
					//var tutorialCommander = '/pa/units/commanders/tutorial_player_commander/tutorial_player_commander.json'; 
					//inventory.units().push(tutorialCommander);
					var commander = inventory.getTag('global', 'commander');
					console.log('commander :' + commander);
					console.log('commander t :' + typeof commander);
					//inventory.units().push("/pa/units/commanders/l_cyclops/l_cyclops.json");
					//inventory.units().push("/pa/units/commanders/l_overwatch/l_overwatch.json");
					//inventory.units().push("/pa/units/commanders/l_rockteeth/l_rockteeth.json");
					//inventory.units().push("/pa/units/commanders/l_wasushi/l_wasushi.json");
					//$.getJSON("coui://pa/units/commanders/l_cyclops/l_cyclops.json").done(function (text) {
					//	console.log("getJSON : "+_.pairs(text)); 
	                //}).fail(function () {
					//	console.error('getJSON fail');
					//});
//----------------------------------------------------------
                    var units =
                    [
                        '/pa/units/commanders/base_commander/base_commander.json',
                        //'/pa/units/commanders/imperial_base/imperial_base.json',
                        //'/pa/units/commanders/quad_base/quad_base.json',
                        //'/pa/units/commanders/raptor_base/raptor_base.json',
                        //'/pa/units/commanders/tank_base/tank_base.json',
						//commander,
                    ];
					var n0=4;
					var n1=10;
					var n2=100;
					var n25=500;
					var n3=1000;
                    var modUnit = function(item)
                    {
                        //mods.push(
                        //{
                        //    file: item,
                        //    path: 'navigation.move_speed',
                        //    op: 'multiply',
                        //    value: n1
                        //});
                        //mods.push(
                        //{
                        //    file: item,
                        //    path: 'navigation.brake',
                        //    op: 'multiply',
                        //    value: n1
                        //});
                        //mods.push(
                        //{
                        //    file: item,
                        //    path: 'navigation.acceleration',
                        //    op: 'multiply',
                        //    value: n1
                        //});
                        //mods.push(
                        //{
                        //    file: item,
                        //    path: 'navigation.turn_speed',
                        //    op: 'multiply',
                        //    value: n0
                        //});
                        mods.push(
                        {
                            file: item,
                            path: 'max_health',
                            op: 'multiply',
                            value: n1
                        });
                        mods.push(
                        {
                            file: item,
                            path: 'production.energy',
                            op: 'multiply',
                            value: n1
                        });
                        mods.push(
                        {
                            file: item,
                            path: 'production.metal',
                            op: 'multiply',
                            value: n1
                        });
                        mods.push(
                        {
                            file: item,
                            path: 'storage.energy',
                            op: 'multiply',
                            value: n1
                        });
                        mods.push(
                        {
                            file: item,
                            path: 'storage.metal',
                            op: 'multiply',
                            value: n1
                        });
                    };
                    _.forEach(units, modUnit);
					//----------------------------------------------------------
                    var units =
                    [
                        //'/pa/units/commanders/base_commander/base_commander.json',
                        //'/pa/units/commanders/imperial_base/imperial_base.json',
                        //'/pa/units/commanders/quad_base/quad_base.json',
                        //'/pa/units/commanders/raptor_base/raptor_base.json',
                        //'/pa/units/commanders/tank_base/tank_base.json',
						commander,
                    ];
					var n0=4;
					var n1=20;
					var n2=100;
					var n25=500;
					var n3=1000;
                    var modUnit = function(item)
                    {
                        //mods.push(
                        //{
                        //    file: item,
                        //    path: 'navigation.move_speed',
                        //    op: 'multiply',
                        //    value: n1
                        //});
                        //mods.push(
                        //{
                        //    file: item,
                        //    path: 'navigation.brake',
                        //    op: 'multiply',
                        //    value: n1
                        //});
                        //mods.push(
                        //{
                        //    file: item,
                        //    path: 'navigation.acceleration',
                        //    op: 'multiply',
                        //    value: n1
                        //});
                        mods.push(
                        {
                            file: item,
                            path: 'navigation.turn_speed',
                            op: 'multiply',
                            value: n0
                        });
                        mods.push(
                        {
                            file: item,
                            path: 'max_health',
                            op: 'multiply',
                            value: n1
                        });
                        mods.push(
                        {
                            file: item,
                            path: 'production.energy',
                            op: 'multiply',
                            value: n25
                        });
                        mods.push(
                        {
                            file: item,
                            path: 'production.metal',
                            op: 'multiply',
                            value: n25
                        });
                        mods.push(
                        {
                            file: item,
                            path: 'storage.energy',
                            op: 'multiply',
                            value: n25
                        });
                        mods.push(
                        {
                            file: item,
                            path: 'storage.metal',
                            op: 'multiply',
                            value: n25
                        });
                        mods.push(
                        {
                            file: item,
							path: "tools.0.spec_id",
							op: "replace",
							value: "/pa/tools/commander_build_arm/commander_build_arm_lilly.json"
							//value: "/pa/tools/commander_build_arm/commander_build_arm.json"
                        });
                    };
                    _.forEach(units, modUnit);
					$.getJSON("coui://pa/tools/commander_build_arm/commander_build_arm_lilly.json").done(function (text) {						
						console.log("getJSON commander_build_arm_lilly : "+_.pairs(text)); 
	                }).fail(function () {
						console.error('getJSON fail commander_build_arm_lilly');
					});
					//----------------------------------------------------------
                    var weaps =
                    [
                        '/pa/tools/uber_cannon/uber_cannon.json',
                        '/pa/units/commanders/base_commander/base_commander_tool_weapon.json',
                        '/pa/units/commanders/base_commander/base_commander_tool_weapon_lilly.json',
                    ];
                    var modWeap = function(item)
                    {
                        mods.push({
                            file: item,
                            path: 'ammo_capacity',
                            op: 'multiply',
                            value: 0.125
                        });
                        mods.push(
                        {
                            file: item,
                            path: 'ammo_demand',
                            op: 'multiply',
                            value: 0.125
                        });
                        mods.push(
                        {
                            file: item,
                            path: 'ammo_per_shot',
                            op: 'multiply',
                            value: 0.125
                        });
                        mods.push(
                        {
                            file: item,
                            path: 'rate_of_fire',
                            op: 'multiply',
                            value: 8.0
                        });
                    };
                    _.forEach(weaps, modWeap);
					//----------------------------------------------------------
                    var ammos =
                    [
                        '/pa/units/commanders/base_commander/base_commander_ammo.json',
                        '/pa/units/commanders/base_commander/base_commander_ammo_lilly.json',
                    ];
                    var modammo = function(item)
                    {
                        mods.push(
                        {
                            file: item,
                            path: 'initial_velocity',
                            op: 'multiply',
                            value: 10.0
                        });
                        mods.push(
                        {
                            file: item,
                            path: 'max_velocity',
                            op: 'multiply',
                            value: 10.0
                        });
                    };
                    _.forEach(ammos, modammo);
					//----------------------------------------------------------
                    var ammos =
                    [
                        '/pa/units/commanders/base_commander/base_commander_ammo_lilly.json',
                    ];
                    var modammo = function(item)
                    {
                        mods.push(
                        {
                            file: item,
                            path: 'damage',
                            op: 'multiply',
                            value: 100.0
                        });
                    };
                    _.forEach(ammos, modammo);
					//----------------------------------------------------------
					/*
                    var build_arms =
                    [
                        '/pa/tools/commander_build_arm/commander_build_arm.json',
                    ];
                    var modbuild_arm = function(build_arm)
                    {
                        mods.push({
                            file: build_arm,
                            path: 'max_range',
                            op: 'multiply',
                            value: 128
                        });
                        mods.push({
                            file: build_arm,
                            path: 'construction_demand.energy',
                            op: 'multiply',
                            value: 128
                        });
                        mods.push({
                            file: build_arm,
                            path: 'construction_demand.metal',
                            op: 'multiply',
                            value: 128
                        });
                    };
                    _.forEach(build_arms, modbuild_arm);
					*/
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
