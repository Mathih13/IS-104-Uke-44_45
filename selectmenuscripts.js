// Initialize the JQuery UI and add overflow functionality
$( "#teams" )
  .selectmenu()
  .selectmenu( "menuWidget" )
    .addClass( "overflow" );

// Called when selecting an option, pushes the selected id to selectFunction.
$("#teams").selectmenu({
  change: function(event, ui) {
    	selectFunction(ui.item.value);
  }
});


/*This function filters each option and looks for the selected one. 
Stops when finding the right one as to not waste resources.
When finding the right team selected, creates an array of team members before displayng them in the teamdisplay paragraph.
*/
function selectFunction(teamselected) {
    document.getElementById("prompt").style.visibility = "hidden";
    var i;
    for (i = 0; i < 8; i++) {
        
        
      // No team selected
      if (teamselected == "none") {
        var text = "";
        var handintext ="";
            document.getElementById("teamname").style.visibility = "hidden";
            document.getElementById("prompt").style.visibility = "visible";
            document.getElementById("teamdisplay").innerHTML = text;
            document.getElementById("handindisplay").innerHTML = handintext;
            {break}
        }
        
        
        // Team 1 Selected
        if (teamselected == "team1") {
            var TeamName ="Group 1";
            var Team = [];
            
            var c;
            for (c  = 0; c < 5; c++) {
                Team.push(chance.name());
   
            }
            
            var teamhanding = [];
            
            var d;
            for (d = 0; d < 5; d++) {
                if (chance.bool() == true) {
                teamhanding.push("Yes");
                }
                else {
                    teamhanding.push("No");
                    }
            }
            
            
			var text = "";
            var handintext ="";
            var a;
			for (a = 0; a < Team.length; a++) {
   			 text += Team[a] + "<br>";
					}
            var b;
            for (b = 0; b < teamhanding.length; b++) {
   			 handintext += teamhanding[b] + "<br>";
					}
            document.getElementById("teamname").innerHTML = TeamName;
            document.getElementById("teamdisplay").innerHTML = text;
            document.getElementById("handindisplay").innerHTML = handintext;
            {break}
        }
        
        
        
        if (teamselected == "team2") {
            var TeamName ="Group 2";
            var Team = [];
            
            var c;
            for (c  = 0; c < 5; c++) {
                Team.push(chance.name());
   
            }
            
            var teamhanding = [];
            
            var d;
            for (d = 0; d < 5; d++) {
                if (chance.bool() == true) {
                teamhanding.push("Yes");
                }
                else {
                    teamhanding.push("No");
                    }
            }
            
            
			var text = "";
            var handintext ="";
            var a;
			for (a = 0; a < Team.length; a++) {
   			 text += Team[a] + "<br>";
					}
            var b;
            for (b = 0; b < teamhanding.length; b++) {
   			 handintext += teamhanding[b] + "<br>";
					}
            document.getElementById("teamname").innerHTML = TeamName;
            document.getElementById("teamdisplay").innerHTML = text;
            document.getElementById("handindisplay").innerHTML = handintext;
            {break}
        }
        
        
        
        if (teamselected == "team3") {
            var TeamName ="Group 3";
            var Team = [];
            
            var c;
            for (c  = 0; c < 5; c++) {
                Team.push(chance.name());
   
            }
            
            var teamhanding = [];
            
            var d;
            for (d = 0; d < 5; d++) {
                if (chance.bool() == true) {
                teamhanding.push("Yes");
                }
                else {
                    teamhanding.push("No");
                    }
            }
            
            
			var text = "";
            var handintext ="";
            var a;
			for (a = 0; a < Team.length; a++) {
   			 text += Team[a] + "<br>";
					}
            var b;
            for (b = 0; b < teamhanding.length; b++) {
   			 handintext += teamhanding[b] + "<br>";
					}
            document.getElementById("teamname").innerHTML = TeamName;
            document.getElementById("teamdisplay").innerHTML = text;
            document.getElementById("handindisplay").innerHTML = handintext;
            {break}
        }
        
        
        
        if (teamselected == "team4") {
            var TeamName ="Group 4";
            var Team = [];
            
            var c;
            for (c  = 0; c < 5; c++) {
                Team.push(chance.name());
   
            }
            
            var teamhanding = [];
            
            var d;
            for (d = 0; d < 5; d++) {
                if (chance.bool() == true) {
                teamhanding.push("Yes");
                }
                else {
                    teamhanding.push("No");
                    }
            }
            
            
			var text = "";
            var handintext ="";
            var a;
			for (a = 0; a < Team.length; a++) {
   			 text += Team[a] + "<br>";
					}
            var b;
            for (b = 0; b < teamhanding.length; b++) {
   			 handintext += teamhanding[b] + "<br>";
					}
            document.getElementById("teamname").innerHTML = TeamName;
            document.getElementById("teamdisplay").innerHTML = text;
            document.getElementById("handindisplay").innerHTML = handintext;
            {break}
        }
        
        
        
        if (teamselected == "team5") {
            var TeamName ="Group 5";
            var Team = [];
            
            var c;
            for (c  = 0; c < 5; c++) {
                Team.push(chance.name());
   
            }
            
            var teamhanding = [];
            
            var d;
            for (d = 0; d < 5; d++) {
                if (chance.bool() == true) {
                teamhanding.push("Yes");
                }
                else {
                    teamhanding.push("No");
                    }
            }
            
            
			var text = "";
            var handintext ="";
            var a;
			for (a = 0; a < Team.length; a++) {
   			 text += Team[a] + "<br>";
					}
            var b;
            for (b = 0; b < teamhanding.length; b++) {
   			 handintext += teamhanding[b] + "<br>";
					}
            document.getElementById("teamname").innerHTML = TeamName;
            document.getElementById("teamdisplay").innerHTML = text;
            document.getElementById("handindisplay").innerHTML = handintext;
            {break}
        }
        
        
        
        if (teamselected == "team6") {
            var TeamName ="Group 6";
            var Team = [];
            
            var c;
            for (c  = 0; c < 5; c++) {
                Team.push(chance.name());
   
            }
            
            var teamhanding = [];
            
            var d;
            for (d = 0; d < 5; d++) {
                if (chance.bool() == true) {
                teamhanding.push("Yes");
                }
                else {
                    teamhanding.push("No");
                    }
            }
            
            
			var text = "";
            var handintext ="";
            var a;
			for (a = 0; a < Team.length; a++) {
   			 text += Team[a] + "<br>";
					}
            var b;
            for (b = 0; b < teamhanding.length; b++) {
   			 handintext += teamhanding[b] + "<br>";
					}
            document.getElementById("teamname").innerHTML = TeamName;
            document.getElementById("teamdisplay").innerHTML = text;
            document.getElementById("handindisplay").innerHTML = handintext;
            {break}
        }
        
        
        
        if (teamselected == "team7") {
            var TeamName ="Group 7";
            var Team = [];
            
            var c;
            for (c  = 0; c < 5; c++) {
                Team.push(chance.name());
   
            }
            
            var teamhanding = [];
            
            var d;
            for (d = 0; d < 5; d++) {
                if (chance.bool() == true) {
                teamhanding.push("Yes");
                }
                else {
                    teamhanding.push("No");
                    }
            }
            
            
			var text = "";
            var handintext ="";
            var a;
			for (a = 0; a < Team.length; a++) {
   			 text += Team[a] + "<br>";
					}
            var b;
            for (b = 0; b < teamhanding.length; b++) {
   			 handintext += teamhanding[b] + "<br>";
					}
            document.getElementById("teamname").innerHTML = TeamName;
            document.getElementById("teamdisplay").innerHTML = text;
            document.getElementById("handindisplay").innerHTML = handintext;
            {break}
        }
        
  
        
        
    }
}

function teaminputFunction() {
    var c;
    for (c  = 0; c < 6; c++) {
        Team.push(chance.name());
   
        }
}




