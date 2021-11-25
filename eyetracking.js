window.saveDataAcrossSessions = true;
webgazer.setGazeListener((data, currentTime) => {
    if (data == null) {
        return;
    }
    var x = data.x; //these x coordinates are relative to the viewport
    var y = data.y; //these y coordinates are relative to the viewport
    elem = document.elementFromPoint(x, y);
    if(elem != null){
        id = elem.id;
        ids = id.split("_")
        if(ids.length > 1){
        let num = ids[1]
        let collapseid = "collapse_"+num;
        ele_value = document.getElementById(collapseid)
        if(ele_value!=null){
        if(ele_value.className == 'panel-collapse collapse'){
            document.getElementById(collapseid).className = "panel-collapse collapse show"
        }
    }
    }
    }
}).begin();










