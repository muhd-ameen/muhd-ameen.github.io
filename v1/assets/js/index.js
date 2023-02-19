$(document).ready(function () {

    $("#name").blur(function () {
        var text = $(this).val()
        if (text.length < 4) {
            $("#err1").show()
            flag1 = 1;
            if (flag1 == 1) {
                $("#submitbtn").prop("disabled", true);
            }

        } else {
            $("#err1").hide()
            flag1 = 0;
            $("#submitbtn").prop("disabled", false);
        }
    })

    $("#emailinput").blur(function () {

        var inputvalues = $(this).val()
        if (/^[a-zA-Z0-9-.]+\@[a-zA-Z]+\.[a-zA-Z]+$/.test(inputvalues) == false) {
            $("#err2").show()
            flag2 = 1;
            if (flag2 == 1) {
                $("#submitbtn").prop("disabled", true);
            }
        } else {
            $("#err2").hide()
            flag2 = 0;
            $("#submitbtn").prop("disabled", false);

        }
    })

    $("#Comment").blur(function () {
        var text = $(this).val()
        if (text.length < 4) {
            $("#err4").show()
            flag4 = 1;
            if (flag4 == 1) {
                $("#submitbtn").prop("disabled", true);
            }

        } else {
            $("#err4").hide()
            flag4 = 0;
            $("#submitbtn").prop("disabled", false);
        }
    })

    $("#numberinput").blur(function () {
        var text2 = $(this).val()
        if (text2.length < 10) {
            $("#err3").show()
            flag3 = 1;
            if (flag3 == 1) {
                $("#submitbtn").prop("disabled", true);
            }
        } else {
            $("#err3").hide()
            flag3 = 0;
            $("#submitbtn").prop("disabled", false);

        }


    })

    $('#numberinput').bind('keyup paste', function(){
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    $('#name').bind('keyup paste', function(){
        this.value = this.value.replace(/[^a-z A-Z]/g, '');
    });

})