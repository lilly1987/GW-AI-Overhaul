// !LOCNS:galactic_war
define([
    'module',
    'shared/gw_common',
    'shared/gw_factions',
    'cards/gwc_start',
	"coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/unit_groups.js",
	"coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
	"coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/ai.js",
	"coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js"
], function(
    module,
    GW,
    GWFactions,
    GWCStart, 
	gwoGroup,
	gwoUnits,
	gwoAI,
	gwoCard
) {
	var gwoUnit=gwoUnits;
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
			inventory.maxCards(inventory.maxCards() + 20);
			//console.log("params p : "+_.pairs(params)); 
            if (inventory.lookupCard(CARD) === 0)
            {
                // Make sure we only do the start buff/dull once
                var buffCount = inventory.getTag('', 'buffCount', 0);
                if (!buffCount) {
                    GWCStart.buff(inventory);
                    inventory.addUnits(
                    [
                        '/pa/units/land/tactical_missile_launcher/tactical_missile_launcher.json',

                    ]);
					//----------------------------------------------------------
                    var mods = [];
                    function modspush(item, path,op,value) {
                        mods.push({
                            file: item,
                            path: path,
                            op: op,
                            value: value
                        });
                    } ;
                    function newid(item) {
                        return item + '.' + (inventory.mods().length + mods.length).toString();
                    } ;
					var n02=2;
					var n04=4;
					var n05=5;
					var n1=10;
					var n2=100;
					var n25=500;
					var n3=1000;
					var n4=10000;
					var n5=100000;
					//----------------------------------------------------------
                    //modspush(
                    //    "/pa/units/orbital/orbital_launcher/orbital_launcher.json",
                    //    "buildable_types",
                    //     "add",
                    //    "| (Orbital & FactoryBuild)"
                    //);
                    //----------------------------------------------------------
                    //var commanders =
                    //[
                    //    '/pa/units/commanders/base_commander/base_commander.json',
                    //];
                    //var modUnit = function(item)
                    //{
                    //    modspush(item ,'max_health','multiply',n1);
                    //    modspush(item ,'production.energy','multiply',n1);
                    //    modspush(item ,'production.metal','multiply',n1);
                    //    modspush(item ,'storage.energy','multiply',n1);
                    //    modspush(item ,'storage.metal','multiply',n1);
                    //};
                    //_.forEach(commanders, modUnit);
					//----------------------------------------------------------
                    var commander = inventory.getTag('global', 'commander');
					console.log('lilly commander :' + commander);
                    var minions =[];
                    var commanders =
                    [
						commander
                    ];
					//----------------------------------------------------------
                    _.forEach(context.minions, function(minion)
                    {
						minion.personality.micro_type=2;
						minion.personality.percent_vehicle=0.2;
						minion.personality.percent_land=0.2;
						minion.personality.percent_air=0.2;
						minion.personality.percent_naval=0.2;
						minion.personality.percent_orbital=0.2;
						minion.personality.factory_build_delay_min=0;
						minion.personality.factory_build_delay_max=0;
						minion.personality.min_basic_fabbers=1;
						minion.personality.max_basic_fabbers=20;
						minion.personality.min_advanced_fabbers=1;
						minion.personality.max_advanced_fabbers=50;
						minion.personality.fabber_to_factory_ratio_basic=1.0;
						minion.personality.fabber_to_factory_ratio_advanced=1.0;
						minion.personality.fabber_alone_on_planet_mod=2.0;
						minion.personality.factory_alone_on_planet_mod=0.5;
						minion.personality.unable_to_expand_delay=0;
						minion.personality.adv_eco_mod=1.5;
						minion.personality.adv_eco_mod_alone=0.5;
						//minion.personality.metal_drain_check=0.5;
						//minion.personality.energy_drain_check=0.5;
						//minion.personality.metal_demand_check=0.5;
						//minion.personality.energy_demand_check=0.5;
						minion.personality.personality_tags=_.pull(minion.personality.personality_tags, 'SlowerExpansion');
						minion.personality.personality_tags.push("ffa");
						minion.personality.personality_tags.push("queller");
						minion.personality.personality_tags =
									minion.personality.personality_tags.concat(
										gwoAI.penchants().penchants
									);
						//minion.commander=commander; //너무 사기됨
						if(!_.includes(minions,minion.commander)){
							minions.push(minion.commander);
							//console.log("lilly minion.commander : "+ minion.commander); 
						}
                        inventory.minions.push(minion);
                    });
					//console.log("lilly minions p : "+_.pairs(minions)); 
                    var minionSpecs = _.filter(_.pluck(context.minions, 'commander'));
					//console.log('lilly minionSpecs :' + minionSpecs);
                    inventory.addUnits(minionSpecs);
					//----------------------------------------------------------
					//--------------------------- for minion -------------------------------
					var modUnit = function(item)
                    {
						console.log("lillt item : "+ item); 
						modspush(item ,'navigation.type','replace',"air");
                        modspush(item ,'navigation.inter_planetary_type','replace',"system");
						modspush(item ,'system_velocity_multiplier','replace',60);
						modspush(item ,'gravwell_velocity_multiplier','replace',20);
						
                        modspush(item ,'navigation.move_speed','multiply',n02);
                        modspush(item ,'navigation.turn_speed','multiply',n02);
                        modspush(item ,'max_health','multiply',n1);
                        modspush(item ,'production.energy','multiply',n04);
                        modspush(item ,'production.metal','multiply',n04);
                        modspush(item ,'storage.energy','multiply',n04);
                        modspush(item ,'storage.metal','multiply',n04);
                        //----------------------------------------------------------
						// /pa/tools/commander_build_arm/commander_build_arm.json
                        var id = newid(item) ;

						console.log('lilly id minion :' + id);
                        modspush(item ,'tools.0.spec_id','clone',id);
                        modspush(item ,'tools.0.spec_id','replace',id);
                        modspush(item ,'tools.0.spec_id','tag',' ');

                        modspush(id ,'construction_demand.energy','multiply',n02);
                        modspush(id ,'construction_demand.metal','multiply',n02);
                        modspush(id ,'yaw_rate','multiply',4);
                        modspush(id ,'pitch_rate','multiply',4);
                        modspush(id ,'yaw_range','multiply',2);
                        modspush(id ,'pitch_range','multiply',4);
                        modspush(id ,'max_range','multiply',n3);
                        modspush(id ,'assist_layers','push',"WL_Orbital");

                    };
                    _.forEach(minions, modUnit);
					//----------------------------------------------------------
					//--------------------- for commander -----------------------
                    var modUnit = function(item)
                    {
                        modspush(item ,'buildable_types','add',
						//'| Land | Naval | Air | Orbital'
						//'| Defense | Titan | Recon | Nuke'
						'| ( Defense | Important | Recon ) - CombatFabBuild'
						//'( CmdBuild | Factory| FactoryBuild | Important | FabBuild | FabAdvBuild)'
						//'- CombatFabBuild - FabBuild '
						);
						modspush(item ,'navigation.type','replace',"air");
						modspush(item ,'navigation.inter_planetary_type','replace',"system");
						modspush(item ,'system_velocity_multiplier','replace',120);
						modspush(item ,'gravwell_velocity_multiplier','replace',40);
						
                        modspush(item ,'navigation.move_speed','multiply',n1);
                        modspush(item ,'navigation.turn_speed','multiply',n1);
                        modspush(item ,'max_health','multiply',n1);
                        modspush(item ,'production.energy','multiply',n3);
                        modspush(item ,'production.metal','multiply',n3);
                        modspush(item ,'storage.energy','multiply',n3);
                        modspush(item ,'storage.metal','multiply',n3);
                        //----------------------------------------------------------
                        modspush(item ,'recon.observer.items','push',
						[{
							"layer": "surface_and_air",
							"channel": "sight",
							"shape": "capsule",
							"radius": 10000,
							"uses_energy": false
						},
						{
							"layer": "orbital",
							"channel": "sight",
							"shape": "capsule",
							"radius": 10000,
							"uses_energy": false
						},
						{
							"layer": "underwater",
							"channel": "sight",
							"shape": "capsule",
							"radius": 10000,
							"uses_energy": false
						}]
						);
                        //----------------------------------------------------------
						
						// /pa/tools/commander_build_arm/commander_build_arm.json
                        var id = newid(item) ;
						console.log('lilly id commander1 :' + id);
                        modspush(item ,'tools.0.spec_id','clone',id);
                        modspush(item ,'tools.0.spec_id','replace',id);
                        modspush(item ,'tools.0.spec_id','tag',' ');
						
                        modspush(id,'construction_demand.energy','multiply',n3);
                        modspush(id,'construction_demand.metal','multiply',n3);
                        modspush(id,'yaw_rate','multiply',4);
                        modspush(id,'pitch_rate','multiply',4);
                        modspush(id,'yaw_range','multiply',2);
                        modspush(id,'pitch_range','multiply',4);
                        modspush(id,'max_range','multiply',n4);
                        modspush(id,'assist_layers','push',"WL_Orbital");
                        //----------------------------------------------------------
						/*
						*/
                        var id = newid(item) ;
						//console.log('lilly id4 :' + typeof id);
                        modspush(item ,'tools.0.spec_id','clone',id);
                        //modspush(item ,'tools.0.spec_id','tag',' ');
						
						console.log('lilly id commander2 :' + id);
                        modspush(item ,'tools','push',
							{
								spec_id: id+'.player',
								aim_bone: "bone_turret",
								muzzle_bone: "socket_rightMuzzle",
								primary_weapon: false
							}
						);
                        modspush(item ,'_.slice(tools,-1)[0].spec_id','tag',' ');
						
                        modspush(id ,'auto_repair','replace',true);
                        modspush(id ,'auto_reclaim','replace',true);
                        modspush(id ,'can_only_assist_with_buildable_items','replace',true);
                        //----------------------------------------------------------
                        // /pa/units/commanders/base_commander/base_commander_tool_aa_weapon.json
                        var newwp = newid(item) ;
                        modspush(item ,'tools.3.spec_id','clone',newwp);
                        //modspush(item ,'tools.3.spec_id','replace',newwp);
                        //modspush(item ,'tools.3.spec_id','tag',' ');

						console.log('lilly id commander3 :' + newwp);
                        modspush(item ,'tools','push',
							{
								spec_id: newwp+'.player',
								aim_bone: "bone_turret",
								muzzle_bone: "socket_rightMuzzle",
								primary_weapon: false
							}
						);

                        modspush(newwp ,'max_range','multiply',1.5);
                        modspush(newwp ,'rate_of_fire','multiply',2);
                        modspush(newwp ,'target_layers','push',[
                            "WL_Orbital",
                            "WL_LandHorizontal",
                            "WL_Seafloor",
                            "WL_WaterSurface"
                        ]);
                        /*modspush(newwp ,'target_priorities','push',[
                            "Mobile - Air",
                            "Mobile",
                            "Structure - Wall"
                        ]);*/

                        // /pa/units/commanders/base_commander/base_commander_aa_ammo.json
                        var newamm = newid(newwp) ;
                        modspush(newwp ,'ammo_id','clone',newamm);
                        modspush(newwp ,'ammo_id','replace',newamm);
                        modspush(newwp ,'ammo_id','tag',' ');

                        modspush(newamm ,'damage','multiply',n2);
                        modspush(newamm ,'splash_damage','multiply',n2);
                        modspush(newamm ,'splash_radius','multiply',n2);
                        modspush(newamm ,'full_damage_splash_radius','multiply',n2);
                        //modspush(newamm ,'initial_velocity','multiply',2);
                        modspush(newamm ,'max_velocity','multiply',4);
                        modspush(newamm ,'lifetime','multiply',2);
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
					_.forEach([gwoGroup.navalMobile], function (item) {
						modspush(item ,'navigation.move_speed','multiply',4);
						modspush(item ,'navigation.brake','multiply',4);
						modspush(item ,'navigation.acceleration','multiply',4);
						modspush(item ,'navigation.turn_speed','multiply',4);
					});
					//--------------------------- nukeLauncherAmmo -------------------------------
					_.forEach([gwoUnits.nukeLauncherAmmo], function (item) {
						modspush(item ,'damage','multiply',2);
						modspush(item ,'splash_radius','multiply',2);
						modspush(item ,'full_damage_splash_radius','multiply',2);
						modspush(item ,'burn_radius','multiply',2);
						modspush(item ,'armor_damage_map.AT_Commander','multiply',2);
					});
                    //----------------------------------------------------------
					  var smallStructures = [
						gwoUnit.energyPlant,
						gwoUnit.energyStorage,
						gwoUnit.galata,
						gwoUnit.landMine,
						gwoUnit.metalStorage,
						gwoUnit.pelter,
						gwoUnit.radar,
						gwoUnit.singleLaserDefenseTower,
						gwoUnit.torpedoLauncher,
						gwoUnit.wall,
					  ];
					  var mediumStructures = [
						gwoUnit.catapult,
						gwoUnit.energyPlantAdvanced,
						gwoUnit.flak,
						gwoUnit.laserDefenseTower,
						gwoUnit.laserDefenseTowerAdvanced,
						gwoUnit.torpedoLauncherAdvanced,
						gwoUnit.umbrella,
					  ];
					  var largeStructures = [
						//gwoUnit.anchor,
						gwoUnit.deepSpaceOrbitalRadar,
						gwoUnit.holkins,
						//gwoUnit.jig,
						gwoUnit.radarAdvanced,
					  ];
					  var groundStructures = smallStructures.concat(
						mediumStructures,
						largeStructures
					  );
					_.forEach(groundStructures, function (item) {
						modspush(item ,'base_spec','replace',"/pa/units/land/base_vehicle/base_vehicle.json");
						modspush(item ,'navigation.type','replace',"Hover");
						modspush(item ,'navigation.acceleration','replace',100);
						modspush(item ,'navigation.brake','replace',100);
						modspush(item ,'navigation.move_speed','replace',100);
						modspush(item ,'navigation.turn_speed','replace',100);
						modspush(item ,'navigation.allow_pushing','replace',true);
						modspush(item ,'navigation.push_sideways','replace',true);
					});
					var orbitalStructures = [gwoUnit.anchor, gwoUnit.jig];
					_.forEach(orbitalStructures, function (item) {
						modspush(item ,'base_spec','replace',"/pa/units/orbital/base_orbital/base_orbital.json");
						modspush(item ,'navigation.acceleration','replace',100);
						modspush(item ,'navigation.brake','replace',100);
						modspush(item ,'navigation.move_speed','replace',100);
						modspush(item ,'navigation.turn_speed','replace',100);
					});
					  var allStructures = groundStructures.concat(
						orbitalStructures
					  );
					_.forEach(allStructures, function (item) {
						modspush(item ,'physics.type','replace',"Mobile");
						modspush(item ,'command_caps','replace',["ORDER_Move", "ORDER_Patrol", "ORDER_Assist"]);
						modspush(item ,'unit_types','pull',"UNITTYPE_Structure");
						modspush(item ,'unit_types','push',"UNITTYPE_Mobile");
					});
					var teleportableStructures = smallStructures.concat(mediumStructures);
					_.forEach(teleportableStructures, function (item) {
						modspush(item ,'teleportable','replace',{});
						modspush(item ,'command_caps','push',"ORDER_Use");
					});
					  var defensiveStructures = gwoGroup.structuresArtillery.concat(
						gwoGroup.structuresDefences
					  );
					  var offensiveStructures = _.filter(
						defensiveStructures,
						function (structure) {
						  return structure !== gwoUnit.wall;
						}
					  );
					_.forEach(offensiveStructures, function (item) {
						modspush(item ,'command_caps','push',"ORDER_Attack");
					});
                    //-------------------------Rapid Deployment Commander----gwaio_start_rapid.js-----------------------------
					
					modspush(gwoUnit.airFactory ,'buildable_types','replace',"(Air & Fabber & Basic & Mobile) & FactoryBuild");
					modspush(gwoUnit.airFactoryAdvanced ,'buildable_types','replace',"(Air & Fabber & Mobile) & FactoryBuild");
					modspush(gwoUnit.botFactory ,'buildable_types','replace',"(Bot & Fabber & Basic & Mobile) & FactoryBuild");
					modspush(gwoUnit.botFactoryAdvanced ,'buildable_types','replace',"(Bot & Fabber & Mobile) & FactoryBuild");
					modspush(gwoUnit.vehicleFactory ,'buildable_types','replace',"(Tank & Fabber & Basic & Mobile) & FactoryBuild");
					modspush(gwoUnit.vehicleFactoryAdvanced ,'buildable_types','replace',"(Tank & Fabber & Mobile) & FactoryBuild");
					modspush(gwoUnit.navalFactory ,'buildable_types','replace',"(Naval & Fabber & Basic & Mobile) & FactoryBuild");
					modspush(gwoUnit.navalFactoryAdvanced ,'buildable_types','replace',"(Naval & Fabber & Mobile) & FactoryBuild");
					modspush(gwoUnit.orbitalLauncher ,'buildable_types','replace',"(Orbital & Fabber & Basic & Mobile) & FactoryBuild");
					modspush(gwoUnit.orbitalFactory ,'buildable_types','replace',"(Orbital & Fabber & Basic & Mobile) & FactoryBuild");
					modspush(gwoUnit.airFabber ,'buildable_types','replace',"Mobile & Basic & Air | Land & Structure & Basic - Factory | Factory & Advanced & Air | FabBuild - Factory");
					modspush(gwoUnit.airFabberAdvanced ,'buildable_types','replace',"Mobile & Air | Land & Structure & Advanced - Factory | FabAdvBuild | FabBuild - Factory | Titan & Air");
					modspush(gwoUnit.botFabber ,'buildable_types','replace',"Mobile & Basic & Bot | Land & Structure & Basic - Factory | Factory & Advanced & Bot & Land | FabBuild - Factory");
					modspush(gwoUnit.botFabberAdvanced ,'buildable_types','replace',"Mobile & Bot | Land & Structure & Advanced - Factory | FabAdvBuild | FabBuild - Factory | Titan & Bot");
					modspush(gwoUnit.colonel ,'buildable_types','replace',"Mobile & Bot | Land & Structure & Advanced - Factory | FabAdvBuild | FabBuild - Factory | Titan & Bot");
					modspush(gwoUnit.vehicleFabber ,'buildable_types','replace',"Mobile & Basic & Tank | Land & Structure & Basic - Factory | Factory & Land & Tank & Advanced | FabBuild - Factory");
					modspush(gwoUnit.vehicleFabberAdvanced ,'buildable_types','replace',"Mobile & Tank | Structure & Land & Advanced - Factory | FabAdvBuild | FabBuild - Factory | Titan & (Tank | Naval)");
					modspush(gwoUnit.navalFabber ,'buildable_types','replace',"Mobile & Basic & Naval | Naval & Structure & Basic - Factory | Naval & Factory & Advanced | FabBuild - Factory");
					modspush(gwoUnit.navalFabberAdvanced ,'buildable_types','replace',"Mobile & Naval | Naval & Structure & Advanced - Factory | FabAdvBuild | FabBuild - Factory");
					
					modspush(gwoUnit.barracuda ,'spawn_layers','replace',"WL_DeepWater");
					modspush(gwoUnit.kraken ,'spawn_layers','replace',"WL_DeepWater");
					modspush(gwoUnit.kestrel ,'spawn_layers','replace',"WL_LandHorizontal");
					modspush("/pa/units/orbital/base_orbital/base_orbital.json" ,'spawn_layers','replace',"WL_Orbital");
					
					if (
						gwoCard.hasUnit(inventory.units(), gwoUnit.orbitalLauncher) ||
						inventory.hasCard("gwaio_upgrade_orbitallauncher")
					) {
						modspush(gwoUnit.orbitalFabber ,'buildable_types','replace',"Orbital & FactoryBuild | FabOrbBuild - Factory");
					} else {
						modspush(gwoUnit.orbitalFabber ,'buildable_types','replace',"Orbital & FactoryBuild & Basic | FabOrbBuild - Factory");
					}
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
