gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDbacObjects1= [];
gdjs.Untitled_32sceneCode.GDbacObjects2= [];
gdjs.Untitled_32sceneCode.GDbacObjects3= [];
gdjs.Untitled_32sceneCode.GDCashObjects1= [];
gdjs.Untitled_32sceneCode.GDCashObjects2= [];
gdjs.Untitled_32sceneCode.GDCashObjects3= [];
gdjs.Untitled_32sceneCode.GDshObjects1= [];
gdjs.Untitled_32sceneCode.GDshObjects2= [];
gdjs.Untitled_32sceneCode.GDshObjects3= [];
gdjs.Untitled_32sceneCode.GDbutObjects1= [];
gdjs.Untitled_32sceneCode.GDbutObjects2= [];
gdjs.Untitled_32sceneCode.GDbutObjects3= [];
gdjs.Untitled_32sceneCode.GDcasObjects1= [];
gdjs.Untitled_32sceneCode.GDcasObjects2= [];
gdjs.Untitled_32sceneCode.GDcasObjects3= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects3= [];
gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects1= [];
gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects2= [];
gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects3= [];
gdjs.Untitled_32sceneCode.GDcostObjects1= [];
gdjs.Untitled_32sceneCode.GDcostObjects2= [];
gdjs.Untitled_32sceneCode.GDcostObjects3= [];
gdjs.Untitled_32sceneCode.GDhouse1Objects1= [];
gdjs.Untitled_32sceneCode.GDhouse1Objects2= [];
gdjs.Untitled_32sceneCode.GDhouse1Objects3= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects3= [];
gdjs.Untitled_32sceneCode.GDCartoonSmokeObjects1= [];
gdjs.Untitled_32sceneCode.GDCartoonSmokeObjects2= [];
gdjs.Untitled_32sceneCode.GDCartoonSmokeObjects3= [];
gdjs.Untitled_32sceneCode.GDShrineObjects1= [];
gdjs.Untitled_32sceneCode.GDShrineObjects2= [];
gdjs.Untitled_32sceneCode.GDShrineObjects3= [];
gdjs.Untitled_32sceneCode.GDShrineIconObjects1= [];
gdjs.Untitled_32sceneCode.GDShrineIconObjects2= [];
gdjs.Untitled_32sceneCode.GDShrineIconObjects3= [];
gdjs.Untitled_32sceneCode.GDCost1Objects1= [];
gdjs.Untitled_32sceneCode.GDCost1Objects2= [];
gdjs.Untitled_32sceneCode.GDCost1Objects3= [];
gdjs.Untitled_32sceneCode.GDerrorObjects1= [];
gdjs.Untitled_32sceneCode.GDerrorObjects2= [];
gdjs.Untitled_32sceneCode.GDerrorObjects3= [];
gdjs.Untitled_32sceneCode.GDpathObjects1= [];
gdjs.Untitled_32sceneCode.GDpathObjects2= [];
gdjs.Untitled_32sceneCode.GDpathObjects3= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Untitled_32sceneCode.GDNewSpriteObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cost1"), gdjs.Untitled_32sceneCode.GDCost1Objects1);
/* Reuse gdjs.Untitled_32sceneCode.GDNewSpriteObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ShrineIcon"), gdjs.Untitled_32sceneCode.GDShrineIconObjects1);
gdjs.copyArray(runtimeScene.getObjects("but"), gdjs.Untitled_32sceneCode.GDbutObjects1);
gdjs.copyArray(runtimeScene.getObjects("cost"), gdjs.Untitled_32sceneCode.GDcostObjects1);
gdjs.copyArray(runtimeScene.getObjects("sh"), gdjs.Untitled_32sceneCode.GDshObjects1);
gdjs.copyArray(runtimeScene.getObjects("shopiconhouse1"), gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDshObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDshObjects1[i].getBehavior("Tween").addObjectPositionXTween2("shop", -(36), "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDbutObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDbutObjects1[i].getBehavior("Tween").addObjectPositionXTween2("move", 162, "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcostObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcostObjects1[i].getBehavior("Tween").addObjectPositionXTween2("cost1.1", 4, "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects1[i].getBehavior("Tween").addObjectPositionXTween2("housewousey1", 5, "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getBehavior("Tween").addObjectPositionXTween2("move2", 170, "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getBehavior("Tween").addObjectAngleTween2("row", 180, "linear", 0.1, false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDShrineIconObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDShrineIconObjects1[i].getBehavior("Tween").addObjectPositionXTween2("ShrineMove", 17, "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCost1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCost1Objects1[i].getBehavior("Tween").addObjectPositionXTween2("cost2.2", 4, "linear", 0.2, false);
}
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Untitled_32sceneCode.GDNewSpriteObjects1});
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cost1"), gdjs.Untitled_32sceneCode.GDCost1Objects1);
/* Reuse gdjs.Untitled_32sceneCode.GDNewSpriteObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ShrineIcon"), gdjs.Untitled_32sceneCode.GDShrineIconObjects1);
gdjs.copyArray(runtimeScene.getObjects("but"), gdjs.Untitled_32sceneCode.GDbutObjects1);
gdjs.copyArray(runtimeScene.getObjects("cost"), gdjs.Untitled_32sceneCode.GDcostObjects1);
gdjs.copyArray(runtimeScene.getObjects("sh"), gdjs.Untitled_32sceneCode.GDshObjects1);
gdjs.copyArray(runtimeScene.getObjects("shopiconhouse1"), gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDbutObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDbutObjects1[i].getBehavior("Tween").addObjectPositionXTween2("move1", -(6), "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getBehavior("Tween").addObjectPositionXTween2("move2.1", 1, "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDshObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDshObjects1[i].getBehavior("Tween").addObjectPositionXTween2("shop1", -(203), "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects1[i].getBehavior("Tween").addObjectPositionXTween2("housewousey", -(170), "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getBehavior("Tween").addObjectAngleTween2("row1", 360, "linear", 0.1, false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCost1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCost1Objects1[i].getBehavior("Tween").addObjectPositionXTween2("cost2.2", -(171), "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDShrineIconObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDShrineIconObjects1[i].getBehavior("Tween").addObjectPositionXTween2("ShrineMove", -(153), "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcostObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcostObjects1[i].getBehavior("Tween").addObjectPositionXTween2("cost1", -(171), "linear", 0.2, false);
}
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDshopiconhouse1Objects1Objects = Hashtable.newFrom({"shopiconhouse1": gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDhouse1Objects1Objects = Hashtable.newFrom({"house1": gdjs.Untitled_32sceneCode.GDhouse1Objects1});
gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cost1"), gdjs.Untitled_32sceneCode.GDCost1Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShrineIcon"), gdjs.Untitled_32sceneCode.GDShrineIconObjects1);
gdjs.copyArray(runtimeScene.getObjects("but"), gdjs.Untitled_32sceneCode.GDbutObjects1);
gdjs.copyArray(runtimeScene.getObjects("cost"), gdjs.Untitled_32sceneCode.GDcostObjects1);
gdjs.copyArray(runtimeScene.getObjects("house1"), gdjs.Untitled_32sceneCode.GDhouse1Objects1);
gdjs.copyArray(runtimeScene.getObjects("sh"), gdjs.Untitled_32sceneCode.GDshObjects1);
gdjs.copyArray(runtimeScene.getObjects("shopiconhouse1"), gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcostObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcostObjects1[i].getBehavior("Tween").addObjectPositionXTween2("cost1", -(171), "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getBehavior("Tween").addObjectAngleTween2("row1", 360, "linear", 0.1, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects1[i].getBehavior("Tween").addObjectPositionXTween2("housewousey", -(170), "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDshObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDshObjects1[i].getBehavior("Tween").addObjectPositionXTween2("shop1", -(203), "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDbutObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDbutObjects1[i].getBehavior("Tween").addObjectPositionXTween2("move1", -(6), "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCost1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCost1Objects1[i].getBehavior("Tween").addObjectPositionXTween2("cost2.2", -(171), "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDShrineIconObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDShrineIconObjects1[i].getBehavior("Tween").addObjectPositionXTween2("ShrineMove", -(153), "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getBehavior("Tween").addObjectPositionXTween2("move2.1", 1, "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDhouse1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDhouse1Objects1[i].setX(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDhouse1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDhouse1Objects1[i].setY(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1[i].getBehavior("Opacity").setOpacity(40);
}
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCartoonSmokeObjects1Objects = Hashtable.newFrom({"CartoonSmoke": gdjs.Untitled_32sceneCode.GDCartoonSmokeObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDhouse1Objects1Objects = Hashtable.newFrom({"house1": gdjs.Untitled_32sceneCode.GDhouse1Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpathObjects1Objects = Hashtable.newFrom({"path": gdjs.Untitled_32sceneCode.GDpathObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDerrorObjects1Objects = Hashtable.newFrom({"error": gdjs.Untitled_32sceneCode.GDerrorObjects1});
gdjs.Untitled_32sceneCode.asyncCallback9177924 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("error"), gdjs.Untitled_32sceneCode.GDerrorObjects2);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDerrorObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDerrorObjects2[i].deleteFromScene(runtimeScene);
}
}gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDerrorObjects1) asyncObjectsList.addObject("error", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback9177924(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.Untitled_32sceneCode.GDhouse1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("path"), gdjs.Untitled_32sceneCode.GDpathObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDhouse1Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpathObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDhouse1Objects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects1 */
gdjs.Untitled_32sceneCode.GDerrorObjects1.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(1).add(200);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDhouse1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDhouse1Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDerrorObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "UI");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects1[i].getBehavior("Animation").setAnimationName("bVCYxC");
}
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDShrineIconObjects1Objects = Hashtable.newFrom({"ShrineIcon": gdjs.Untitled_32sceneCode.GDShrineIconObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDShrineObjects1Objects = Hashtable.newFrom({"Shrine": gdjs.Untitled_32sceneCode.GDShrineObjects1});
gdjs.Untitled_32sceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cost1"), gdjs.Untitled_32sceneCode.GDCost1Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shrine"), gdjs.Untitled_32sceneCode.GDShrineObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShrineIcon"), gdjs.Untitled_32sceneCode.GDShrineIconObjects1);
gdjs.copyArray(runtimeScene.getObjects("but"), gdjs.Untitled_32sceneCode.GDbutObjects1);
gdjs.copyArray(runtimeScene.getObjects("cost"), gdjs.Untitled_32sceneCode.GDcostObjects1);
gdjs.copyArray(runtimeScene.getObjects("sh"), gdjs.Untitled_32sceneCode.GDshObjects1);
gdjs.copyArray(runtimeScene.getObjects("shopiconhouse1"), gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getBehavior("Tween").addObjectAngleTween2("row1", 360, "linear", 0.1, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDshObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDshObjects1[i].getBehavior("Tween").addObjectPositionXTween2("shop1", -(203), "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDShrineIconObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDShrineIconObjects1[i].getBehavior("Tween").addObjectPositionXTween2("ShrineMove", -(153), "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getBehavior("Tween").addObjectPositionXTween2("move2.1", 1, "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCost1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCost1Objects1[i].getBehavior("Tween").addObjectPositionXTween2("cost2.2", -(171), "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDbutObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDbutObjects1[i].getBehavior("Tween").addObjectPositionXTween2("move1", -(6), "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects1[i].getBehavior("Tween").addObjectPositionXTween2("housewousey", -(170), "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcostObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcostObjects1[i].getBehavior("Tween").addObjectPositionXTween2("cost1", -(171), "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDShrineObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDShrineObjects1[i].setY(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1[i].getBehavior("Opacity").setOpacity(40);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDShrineObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDShrineObjects1[i].setX(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCartoonSmokeObjects1Objects = Hashtable.newFrom({"CartoonSmoke": gdjs.Untitled_32sceneCode.GDCartoonSmokeObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDShrineObjects2Objects = Hashtable.newFrom({"Shrine": gdjs.Untitled_32sceneCode.GDShrineObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDhouse1Objects2Objects = Hashtable.newFrom({"house1": gdjs.Untitled_32sceneCode.GDhouse1Objects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDerrorObjects2Objects = Hashtable.newFrom({"error": gdjs.Untitled_32sceneCode.GDerrorObjects2});
gdjs.Untitled_32sceneCode.asyncCallback9974100 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("error"), gdjs.Untitled_32sceneCode.GDerrorObjects3);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDerrorObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDerrorObjects3[i].deleteFromScene(runtimeScene);
}
}gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDerrorObjects2) asyncObjectsList.addObject("error", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback9974100(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDShrineObjects1Objects = Hashtable.newFrom({"Shrine": gdjs.Untitled_32sceneCode.GDShrineObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpathObjects1Objects = Hashtable.newFrom({"path": gdjs.Untitled_32sceneCode.GDpathObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDerrorObjects1Objects = Hashtable.newFrom({"error": gdjs.Untitled_32sceneCode.GDerrorObjects1});
gdjs.Untitled_32sceneCode.asyncCallback10033236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("error"), gdjs.Untitled_32sceneCode.GDerrorObjects2);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDerrorObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDerrorObjects2[i].deleteFromScene(runtimeScene);
}
}gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDerrorObjects1) asyncObjectsList.addObject("error", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10033236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDShrineObjects1, gdjs.Untitled_32sceneCode.GDShrineObjects2);

gdjs.copyArray(runtimeScene.getObjects("house1"), gdjs.Untitled_32sceneCode.GDhouse1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDShrineObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDhouse1Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDShrineObjects2 */
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDShrineIconObjects1, gdjs.Untitled_32sceneCode.GDShrineIconObjects2);

gdjs.Untitled_32sceneCode.GDerrorObjects2.length = 0;

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDShrineObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDShrineObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDShrineIconObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDShrineIconObjects2[i].getBehavior("Animation").setAnimationName("sh");
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDerrorObjects2Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "UI");
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(500);
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Untitled_32sceneCode.GDShrineObjects1 */
gdjs.copyArray(runtimeScene.getObjects("path"), gdjs.Untitled_32sceneCode.GDpathObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDShrineObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpathObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDShrineObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDShrineIconObjects1 */
gdjs.Untitled_32sceneCode.GDerrorObjects1.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDShrineObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDShrineObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(500);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDShrineIconObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDShrineIconObjects1[i].getBehavior("Animation").setAnimationName("sh");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDerrorObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "UI");
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8698548);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8541796);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].getBehavior("Tween").hasFinished("move2") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[k] = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = k;
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() != runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cash"), gdjs.Untitled_32sceneCode.GDCashObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCashObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCashObjects1[i].getBehavior("RollingCounter").SetValue(gdjs.evtTools.common.toNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("shopiconhouse1"), gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDshopiconhouse1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 200);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(7706948);
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.Untitled_32sceneCode.GDhouse1Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDhouse1Objects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "Buildings");
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDhouse1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDhouse1Objects1[i].getBehavior("Resizable").setWidth(171);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDhouse1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDhouse1Objects1[i].getBehavior("Resizable").setHeight(135);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("house1"), gdjs.Untitled_32sceneCode.GDhouse1Objects1);
gdjs.copyArray(runtimeScene.getObjects("shopiconhouse1"), gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects1);
gdjs.Untitled_32sceneCode.GDCartoonSmokeObjects1.length = 0;

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDhouse1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDhouse1Objects1[i].setPosition(Math.round((gdjs.Untitled_32sceneCode.GDhouse1Objects1[i].getPointX("")) / 128) * 128,Math.round((gdjs.Untitled_32sceneCode.GDhouse1Objects1[i].getPointY("")) / 128) * 128);
}
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(200);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects1[i].getBehavior("Animation").setAnimationName("rah");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCartoonSmokeObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "Buildings");
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9585388);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "IncomeTimer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "IncomeTimer") >= 5;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(50);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "IncomeTimer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShrineIcon"), gdjs.Untitled_32sceneCode.GDShrineIconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDShrineIconObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 500);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10101668);
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.Untitled_32sceneCode.GDShrineObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDShrineObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "Buildings");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDShrineObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDShrineObjects1[i].getBehavior("Resizable").setWidth(150);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDShrineObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDShrineObjects1[i].getBehavior("Resizable").setHeight(205);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shrine"), gdjs.Untitled_32sceneCode.GDShrineObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShrineIcon"), gdjs.Untitled_32sceneCode.GDShrineIconObjects1);
gdjs.Untitled_32sceneCode.GDCartoonSmokeObjects1.length = 0;

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDShrineObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDShrineObjects1[i].setPosition(Math.round((gdjs.Untitled_32sceneCode.GDShrineObjects1[i].getPointX("")) / 128) * 128,Math.round((gdjs.Untitled_32sceneCode.GDShrineObjects1[i].getPointY("")) / 128) * 128);
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCartoonSmokeObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "Buildings");
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(500);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(2);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDShrineIconObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDShrineIconObjects1[i].getBehavior("Animation").setAnimationName("gray");
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(15);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10008916);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "IncomeTimer1");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "IncomeTimer1") >= 5;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(150);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "IncomeTimer1");
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDbacObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbacObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbacObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCashObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCashObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCashObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDshObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDshObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDshObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDbutObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbutObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbutObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDcasObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDcasObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDcasObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDcostObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDcostObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDcostObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDhouse1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDhouse1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDhouse1Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCartoonSmokeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCartoonSmokeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCartoonSmokeObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDShrineObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDShrineObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDShrineObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDShrineIconObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDShrineIconObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDShrineIconObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCost1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDCost1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDCost1Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDerrorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDerrorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDerrorObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDpathObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDpathObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDpathObjects3.length = 0;

gdjs.Untitled_32sceneCode.eventsList9(runtimeScene);
gdjs.Untitled_32sceneCode.GDbacObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbacObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbacObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCashObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCashObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCashObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDshObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDshObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDshObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDbutObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbutObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbutObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDcasObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDcasObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDcasObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDshopiconhouse1Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDcostObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDcostObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDcostObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDhouse1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDhouse1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDhouse1Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCartoonSmokeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCartoonSmokeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCartoonSmokeObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDShrineObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDShrineObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDShrineObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDShrineIconObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDShrineIconObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDShrineIconObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCost1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDCost1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDCost1Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDerrorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDerrorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDerrorObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDpathObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDpathObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDpathObjects3.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
