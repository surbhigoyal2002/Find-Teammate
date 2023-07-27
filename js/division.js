function SelectAllData() {
    firebase.database().ref('users').on('value',
        function (AllRecords) {
            AllRecords.forEach(
                function (CurrentRecord) {
                    var picture = CurrentRecord.val().picture;
                    var name = CurrentRecord.val().username;
                    var college = CurrentRecord.val().college;
                    var year = CurrentRecord.val().year;
                    var skill = CurrentRecord.val().skill;
                    var stack = CurrentRecord.val().stack;

                    AddItemsToTable(picture, name, college, year, skill, stack);

                });

        });

}




window.onload = SelectAllData;



function AddItemsToTable(picture, name, college, year, skill, stack) {
    var tbody = document.getElementById('tbod');
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');


    var ul1 = document.createElement('ul');
    var ul2 = document.createElement('ul');

    var li11 = document.createElement('li');
    var li12 = document.createElement('li');
    var li21 = document.createElement('li');
    var li22 = document.createElement('li');



    li11.innerHTML = picture;
    li12.innerHTML = name;
    li21.innerHTML = college;
    li22.innerHTML = year;
    td3.innerHTML = skill;
    td4.innerHTML = stack;



    ul1.appendChild(li11);
    ul1.appendChild(li12);
    ul2.appendChild(li21);
    ul2.appendChild(li22);

    td1.appendChild(ul1);
    td2.appendChild(ul2);


    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);

    tbody.appendChild(trow);

}

