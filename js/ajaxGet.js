ajaxGet(
  "http://localhost:8080/js/data.json",

  function(response){
    var data = JSON.parse(response);
    var skillsArticle = document.getElementById('skills');
    var object = data.category[0].skills;
    var ulSkills = document.getElementById('ul-skills');
    var ulActivities = document. getElementById('ul-activities');
    var titleA = document. getElementById('title-activities');
    var titleS = document. getElementById('title-skills');
    var object2 = data.category[1].activities;

    titleS.textContent = data.category[0].name;
    titleA.textContent = data.category[1].name;

    for (var skill in object) {
      if (object.hasOwnProperty(skill)) {
        var li = document.createElement('li');
        li.textContent = object[skill].name;
        ulSkills.appendChild(li);
      }
    }

    for (var activity in object2) {
      if (object.hasOwnProperty(activity)) {
        var li = document.createElement('li');
        li.textContent = object2[activity].name;
        ulActivities.appendChild(li);
      }
    }
  }
);
