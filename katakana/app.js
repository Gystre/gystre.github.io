var selectedCharacterIndices = []; // contains indices for selected boxes
var studyArray = []; // contains all kana that will be tested
var scores = []; //keeps track of how many times user got a certain kana wrong

var kana = [["ア", "イ", "ウ", "エ", "オ"], ["カ", "キ", "ク", "ケ", "コ"], ["サ", "シ", "ス", "セ", "ソ"], ["タ", "チ", "ツ", "テ", "ト"], ["ナ", "ニ", "ヌ", "ネ", "ノ"], ["ハ", "ヒ", "フ", "ヘ", "ホ"], ["マ", "ミ", "ム", "メ", "モ"], ["ヤ", "ユ", "ヨ"], ["ラ", "リ", "ル", "レ", "ロ"], ["ワ", "ヲ", "ン"], ["ガ", "ギ", "グ", "ゲ", "ゴ"], ["ザ", "ジ", "ズ", "ゼ", "ゾ"], ["ダ", "ヂ", "ヅ", "デ", "ド"], ["バ", "ビ", "ブ", "ベ", "ボ"], ["パ", "ピ", "プ", "ペ", "ポ"], 
['ニャ', 'ニュ', 'ニョ'], ['チャ','チュ','チョ'], ['シャ','シュ','ショ'], ['キャ','キュ','キョ'], ['ギャ','ギュ','ギョ'], ['リャ','リュ','リョ'],['ミャ','ミュ','ミョ'], ['ヒャ','ヒュ','ヒョ'], ['ピャ','ピュ','ピョ'],['ビヤ','ビュ','ビョ'], ['ヂヤ','ヂユ','ヂヨ'],['ジヤ','ジユ','ヂヨ']];

//probably better way to do this that i would never understand in like millions of years but wutever ya know
var answers= [];
answers["a"] = "ア" //a column
answers["i"] = "イ"
answers["u"] = "ウ"
answers["e"] = "エ"
answers["o"] = "オ"

answers["ka"] = "カ" //ka column
answers["ki"] = "キ"
answers["ku"] = "ク"
answers["ke"] = "ケ"
answers["ko"] = "コ"

answers["sa"] = "サ" //sa column
answers["shi"] = "シ"
answers["su"] = "ス"
answers["se"] = "セ"
answers["so"] = "ソ"

answers["ta"] = "タ" //ta column
answers["chi"] = "チ"
answers["tsu"] = "ツ"
answers["te"] = "テ"
answers["to"] = "ト"

answers["na"] = "ナ" //na column
answers["ni"] = "ニ"
answers["nu"] = "ヌ"
answers["ne"] = "ネ"
answers["no"] = "ノ"

answers["ha"] = "ハ" //ha column
answers["hi"] = "ヒ"
answers["fu"] = "フ"
answers["he"] = "ヘ"
answers["ho"] = "ホ"

answers["ma"] = "マ" //ma column
answers["mi"] = "ミ"
answers["mu"] = "ム"
answers["me"] = "メ"
answers["mo"] = "モ"

answers["ya"] = "ヤ" //ya column
answers["yu"] = "ユ"
answers["yo"] = "ヨ"

answers["ra"] = "ラ" //ra column
answers["ri"] = "リ"
answers["ru"] = "ル"
answers["re"] = "レ"
answers["ro"] = "ロ"

answers["wa"] = "ワ" //wa column
answers["wo"] = "ヲ"
answers["n"] = "ン"

//dakuten
answers["ga"] = "ガ" //ga column
answers["gi"] = "ギ"
answers["gu"] = "グ"
answers["ge"] = "ゲ"
answers["go"] = "ゴ"

answers["za"] = "ザ" //za column
answers["ji"] = "ジ"
answers["zu"] = "ズ"
answers["ze"] = "ゼ"
answers["zo"] = "ゾ"

answers["da"] = "ダ" //da column
answers["di"] = "ヂ"
answers["du"] = "ヅ"
answers["de"] = "デ"
answers["do"] = "ド"

answers["ba"] = "バ" //ba column
answers["bi"] = "ビ"
answers["bu"] = "ブ"
answers["be"] = "ベ"
answers["bo"] = "ボ"

answers["pa"] = "パ" //pa column
answers["pi"] = "ピ"
answers["pu"] = "プ"
answers["pe"] = "ペ"
answers["po"] = "ポ"

answers["nya"] = "ニャ" //nya column
answers["nyu"] = "ニュ"
answers["nyo"] = "ニョ"

answers["cha"] = "チャ" //cha column
answers["chu"] = "チュ"
answers["cho"] = "チョ"

answers["sha"] = "シャ" //sha column
answers["shu"] = "シュ"
answers["sho"] = "ショ"

answers["kya"] = "キャ" //kya column
answers["kyu"] = "キュ"
answers["kyo"] = "キョ"

answers["gya"] = "ギャ" //gya column
answers["gyu"] = "ギュ"
answers["gyo"] = "ギョ"

answers["rya"] = "リャ" //rya column
answers["ryu"] = "リュ"
answers["ryo"] = "リョ"

answers["mya"] = "ミャ" //mya column
answers["myu"] = "ミュ"
answers["myo"] = "ミョ"

answers["hya"] = "ヒャ" //hya column
answers["hyu"] = "ヒュ"
answers["hyo"] = "ヒョ"

answers["pya"] = "ピャ" //pya column
answers["pyu"] = "ピュ"
answers["pyo"] = "ピョ"

answers["bya"] = "ビヤ" //bya column
answers["byu"] = "ビュ"
answers["byo"] = "ビョ"

answers["dya"] = "ヂヤ" //dya column
answers["dyu"] = "ヂユ"
answers["dyo"] = "ヂヨ"

answers["jya"] = "ジヤ" //jya column
answers["jyu"] = "ジユ"
answers["jyo"] = "ジヨ"

//thanks tofugu ;)

//apparently if don't use this function, half the array is just missing
function CopyArray(source){
    var array = [];

    source.forEach(function(item) {
        array.push(item);
    });

    return array;
}

function ShuffleArray (array) {
    var workingCopy = CopyArray(array);
    var mappedArray = array.map(function () {
        var arraySize = workingCopy.length;
        var random = Math.floor(Math.random() * arraySize);
        return workingCopy.splice(random, 1)[0];
    });
    return mappedArray;
};

//make card green to show correctedness
function renderCorrectCard(index) {
    $(".quiz-card").eq(index).removeClass("incorrect").addClass("correct");
    $(".quiz-card").eq(index).find("input").prop("disabled", true);
}

//make card darker blue and use incorrect text as placeholder
function renderIncorrectCard(index) {
    $(".quiz-card").eq(index).removeClass("correct").addClass("incorrect");
    var incorrectVal = $(".quiz-card").eq(index).find('input[type="text"]').val();
    $(".quiz-card").eq(index).find('input[type="text"]').attr("placeholder", "".concat(incorrectVal));
    $(".quiz-card").eq(index).find('input[type="text"]').val("");
}

//keep moving over correct cards until find one that isn't
function movePosition(index) {
    var position = index + 1;

    while ($(".quiz-card").eq(position).next().hasClass("correct")) {
      position += 1;
    }

    return position;
}

//transfer focus of text input to the next available card
function moveToNext(index) {
    var nextCard = $(".quiz-card").eq(index).next();
    var position = movePosition(index);
    var positionCard = $(".quiz-card").eq(position).next();

    if (nextCard.hasClass("correct")) {
      var focusPoint = positionCard.find('input[type="text"]');
      focusPoint.focus();

      if (focusPoint.length === 0) {
        $(".quiz-card").not(".correct").find('input[type="text"]').first().focus();
      }
    } else if (nextCard.length === 0) {
      $(".quiz-card").not(".correct").find('input[type="text"]').first().focus();
    } else {
      nextCard.find('input[type="text"]').focus();
    }
}

function keepScore(index) {
    var targetChar = $(".card__text").eq(index)[0].innerText;
    var objectExists = false;
    scores.forEach(function (item) {
      if (item.char === targetChar) {
        objectExists = true;
      }
    });

    if (objectExists) {
      scores.forEach(function (item) {
        if (item.char === targetChar) {
          var objIndex = scores.indexOf(item);
          scores[objIndex].incorrect += 1;
        }
      });
    } else {
      var obj = {};
      obj.char = targetChar;
      obj.incorrect = 1;
      scores.push(obj);
    }
}

//transform input to katakana and check if right
function IfCorrect(item, index, userInput){
    if (answers[userInput] === item) {
	    renderCorrectCard(index);
	    moveToNext(index);
	  } else {
	    renderIncorrectCard(index);
	    keepScore(index);
	    moveToNext(index);
	}
}

function AppendCardsToQuiz(item){
    $("#card-container").append("<label class=\"quiz-card\">\n    <div class=\"card__text\">".concat(item, "</div>\n    <form class=\"card__form\">\n    <input type=\"text\" class=\"card__field\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" maxlength=\"5\">\n    </form>\n    </label>"));
}

//check if all the cards have correct class on them, highlight end button
function HighlightFinishButton() {
    var counter = 0;
    $.each($(".quiz-card"), function (index, item) {
      if ($(item).hasClass("correct")) {
        counter += 1;
      }

      if (counter === $(".quiz-card").length) {
        $(".focused-card").removeClass("focused-card");
        $("#finishButton").focus();
      }
    });
}

function CheckAnswer(item, index){
    $("form").eq(index).on("submit", function(e){
        e.preventDefault();
        var userInput = e.target[0].value;

        if(userInput !== ""){
            IfCorrect(item, index, userInput);
            HighlightFinishButton();
        }
    })
}

function CheckAnswerOnBlur(item, index){
    $("form").find("input").eq(index).on("blur", function (e) {
	    e.preventDefault();
	    var userInput = e.target.value;

        if(userInput !== ""){
            IfCorrect(item, index, userInput);
            HighlightFinishButton();
        }
	});
}

//find all cards with .correct class attached
function countAllCorrect() {
    var correctNumber = 0;
    $(".correct").each(function () {
      correctNumber += 1;
    });
    return correctNumber;
}

//count all elements with .quiz-card class
function countAllCards() {
    var cardNumber = 0;
    $(".quiz-card").each(function () {
      cardNumber += 1;
    });
    return cardNumber;
}

function EndQuiz(){
    $("#quiz").hide()
    $(window).scrollTop(0)
    $("#results").show()

    //calculate correct cards and append a percentage
    var correctNumber = countAllCorrect();
    var cardNumber = countAllCards();
    var result = correctNumber / cardNumber * 100;

    $("#percent-results").append("<h3>Overall Correct: ".concat(correctNumber, "/").concat(cardNumber, " (").concat(result.toFixed(2), "%)</h3>"));


    var windowScrollTop = $(window).scrollTop();
    window.scrollTo({
      top: windowScrollTop,
      behavior: "smooth"
    });
}

//TODO: add a time taken or something

$(document).ready(function(){
    //on focus text input, highlight card
    $("#quiz").on("focus", 'input[type="text"]', function () {
	    $(".quiz-card").removeClass("focused-card");
	    $(this).closest(".quiz-card").addClass("focused-card");
	});

    $("#quiz").hide()
    $("#results").hide()

    $(".select-box").each(function(){
        $(this).click(function(){
            $(this).toggleClass("check", $(this).find("input").prop("checked"))
        })
    })

    $("#beginButton").click(function(){
        studyArray = []
        selectedCharacterIndices = []
        scores = []

        //gather indices of selected items
        $.each($(".option"), function(index, item){
            if($(item).find("input").prop("checked")){
                selectedCharacterIndices = selectedCharacterIndices.concat(index)
            }
        })

        //build study set, referencing kana array
        selectedCharacterIndices.forEach(function (item) {
            studyArray = studyArray.concat(kana[item]);
        });

        if(selectedCharacterIndices.length > 0){
            var shuffledKana = ShuffleArray(studyArray)

            //create cards and attach listner functions
            shuffledKana.forEach(function(item, index){
                AppendCardsToQuiz(item)
                CheckAnswer(item, index)
                CheckAnswerOnBlur(item, index);
            })
    
            //move card to top on select
            $(".quiz-card").find('input[type="text"]').eq(0).focus();
            $("html,body").animate({
              scrollTop: 0
            }, 100);
    
            $("#start").hide()
            $("#quiz").show()
        }else{
            alert("make a selection before starting")
        }
    })

    $("#finishButton").click(function(){
        //check if the user has any unanswered cards before ending the quiz
        var isEmpty = false;
        $.each($(".quiz-card").find('input[type="text"]'), function (index, item) {
            if (item.value === "") {
                isEmpty = true;
                return false
            }
        });
  
        if (isEmpty) {
            var promptWindow = window.confirm("You still have unanswered cards. Are you sure you want to end the quiz?");
  
            if (promptWindow) {
                EndQuiz();
            }
        } else {
            EndQuiz();
        }
    })

    //reset stuff back to main
    $(".backToMain").click(function(){
        $("#quiz").hide()
        $("#results").hide()
        $("#start").show()
    
        //i fking love u jquery
        $("#percent-results").empty()
        $("#card-container").empty()

        studyArray = []
        selectedCharacterIndices = []
        scores = []
    })

    $("#selectMain").click(function(){
        $.each($(".main").find("input"), function(index, item){
            item.checked = $("#selectMain").hasClass("check")
            $(this).parent().toggleClass("check", item.checked)
        })
    })

    $("#selectDaku").click(function(){
        $.each($(".daku").find("input"), function(index, item){
            item.checked = $("#selectDaku").hasClass("check")
            $(this).parent().toggleClass("check", item.checked)
        })
    })

    $("#selectCombo").click(function(){
        $.each($(".combo").find("input"), function(index, item){
            item.checked = $("#selectCombo").hasClass("check")
            $(this).parent().toggleClass("check", item.checked)
        })
    })

    $("#selectAll").click(function(){
        var state = $("#selectAll").hasClass("check")
        $.each($(".option").find("input"), function(index, item){
            item.checked = state
            $(this).parent().toggleClass("check", state)
        })

        document.getElementById("selectMain").checked = state
        $("#selectMain").toggleClass("check", state)

        document.getElementById("selectDaku").checked = state
        $("#selectDaku").toggleClass("check", state)

        document.getElementById("selectCombo").checked = state
        $("#selectCombo").toggleClass("check", state)
    })

    $(document).on("keypress", function(e){
        if(e.which == 13){
            if($("#start").is(":visible")){
                $("#beginButton").trigger("click")

                $(".quiz-card").find('input[type="text"]').eq(0).focus();
                $("html,body").animate({
                    scrollTop: 0
                }, 100);
            }else if($("#quiz").is(":visible")){
                $("#finishButton").trigger("click")
            }else if($("#results").is(":visible")){
                $(".backToMain").trigger("click")
            }
        }
    })
})
