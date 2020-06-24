class Form{

    constructor(){}

    display(){
        var title = createElement('h2');
        title.html("Survey: For A Better World");
        title.position(400,40);

        var nameTxt = createElement('h3');
        nameTxt.html("Name:");
        nameTxt.position(130,135);
        var nameInput = createInput("");
        nameInput.position(190,155);


        var emailTxt = createElement('h3');
        emailTxt.html("Email:");
        emailTxt.position(130,195);
        var Emailinput = createInput("");
        Emailinput.position(190,215);
        
        var Q1Txt = createElement('h3');
        Q1Txt.html("Q1.Which subject do you think, must be added in school curriculums?");
        Q1Txt.position(130,250);
        var ans1 = createInput("");
        ans1.position(130,315);

        var Q2Txt = createElement('h3');
        Q2Txt.html("Q2. Which subject must be removed from school curriculum ?");
        Q2Txt.position(130,335);
        var ans2 = createInput("");
        ans2.position(130,395);

        var Q3Txt = createElement('h3');
        Q3Txt.html("Q3.What are you proud of accomplishing in class this year?");
        Q3Txt.position(130,415);
        var ans3 = createInput("");
        ans3.position(130,475);

        var Q4Txt = createElement('h3');
        Q4Txt.html("Q4.What would you encourage more of at your school?");
        Q4Txt.position(130,505);
        var ans4 = createInput("");
        ans4.position(130,565);

        var Q5Txt = createElement('h3');
        Q5Txt.html("Q5. What do you think is the most important skill you must learn at school?");
        Q5Txt.position(130,595);
        var ans5 = createInput("");
        ans5.position(130,655);



        var button = createButton('Submit');
        button.position(400,700);


        var msg = createElement('h3');

  
     button.mousePressed(function(){
         background("lavender");
            nameTxt.hide();
            nameInput.hide();
            emailTxt.hide();
            Emailinput.hide();
            Q1Txt.hide();
            Q2Txt.hide();
            Q3Txt.hide();
            Q4Txt.hide();
            Q5Txt.hide();
            ans1.hide();
            ans2.hide();
            ans3.hide();
            ans4.hide();
            ans5.hide();
            button.hide();

            alert("Thankyou,for your participation in this survey! We appreciate it!");

            var name = nameInput.value();
            var email = Emailinput.value();
            var ans1input = ans1.value();
            var ans2input = ans2.value();
            var ans3input = ans3.value();
            var ans4input = ans4.value();
            var ans5input = ans5.value();

            voterCount = voterCount + 1;

            voter.update(name,email,ans1input,ans2input,ans3input,ans4input,ans5input);
            voter.updateCount(voterCount);
            msg.html("Survey Completed Successfully!!");
            msg.position(300,400);
        });
    
    }
}