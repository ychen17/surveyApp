!function(){"use strict";angular.module("surveyApp").controller("surveyController",["$scope","$location","activeData",function(e,t,o){e.title="Survey",e.questions=[],e.questionCounter=0,e.answers=[],e.selectedAnswer="",e.surveyID="",e.$watch("selectedAnswer",function(t){if(""!==t&&void 0!==t){console.log(t);var o=e.questions[e.questionCounter].quesID,n=JSON.parse(t).answerID;console.log(n),console.log(e.questions[e.questionCounter].quesID),e.saveAnswerToLocalStorage(o,n),$("#next").removeClass("disabled")}}),e.saveAnswerToLocalStorage=function(t,o){var n=e.surveyID;localStorage.setItem(n+":"+t,o)},e.checkFromLocalStorage=function(t){var o=e.surveyID;return null!==localStorage.getItem(o+":"+t)?localStorage.getItem(o+":"+t):"not set"},e.controllerInit=function(){e.questions=o.getSurveyQuestions(),e.surveyID=o.getSurveyID(),console.log(e.questions),0===e.questionCounter&&$("#prev").addClass("disabled"),e.populateQuestions()},e.populateQuestions=function(){console.log(e.questions[e.questionCounter]);var t=e.questions[e.questionCounter].questionText;e.question=t,"multiChoiceSingleCorrect"===e.questions[e.questionCounter].questionType?($("#optionsTwo").hide(),$("#optionsThree").hide(),$("#optionsOne").show()):"multiChoiceMultipleCorrect"===e.questions[e.questionCounter].questionType?($("#optionsOne").hide(),$("#optionsTwo").hide(),$("#optionsThree").show()):"bodyPain"===e.questions[e.questionCounter].questionType&&($("#optionsOne").hide(),$("#optionsThree").hide(),$("#optionsTwo").show()),e.populateAnswers()},e.populateAnswers=function(){e.answers=[];var t=e.checkFromLocalStorage(e.questions[e.questionCounter].quesID);angular.forEach(e.questions[e.questionCounter].answerOptions,function(o){console.log(o.answerText),e.answers.push(o),"not set"!==t&&t===parseInt(o.answerID)&&(console.log("here"),e.selectedAnswer=o,console.log(e.selectedAnswer))}),console.log(e.answers)},e.goPrev=function(){e.questionCounter--,0===e.questionCounter&&$("#prev").addClass("disabled"),$("#next").removeClass("disabled"),e.populateQuestions()},e.goNext=function(){e.questionCounter++,e.questionCounter>0&&$("#prev").removeClass("disabled"),e.questionCounter===e.questions.length-1&&$("#next").addClass("disabled"),e.populateQuestions(),e.selectedAnswer="",$("#next").addClass("disabled")},e.changePage=function(e){t.path(e)},e.parts=["frontFaceFill","frontChestFill","frontRightHandFill","frontAbdomenFill","frontLeftHandFill","frontRightLegFill","frontLeftLegFill","backHeadFill","backFill","backLeftLegFill","backRightLegFill","backRightHandFill","backLeftHandFill","backLowerFill"],e.partNames=["Front Head Area","Chest Area","Right Hand Front","Abdomen Area","Left Hand Front","Right Leg Front","Left Leg Front","Head Back Area","Back","Left Leg Back","Right Leg Back","Right Hand Back","Left Hand Back","Lower Back"],e.partClicked="No Part Selected",e.painIntensityValue=0,e.position,e.lastSelectedPart,e.noPartSelected=!0,e.onClickParts=function(t){e.position=e.parts.indexOf(t.target.id),e.lastSelectedPart!=t.target?("undefined"!=typeof e.lastSelectedPart&&(e.lastSelectedPart.style.fill="#ffffff"),t.target.style.fill="#e74c3c",e.noPartSelected=!1):e.noPartSelected?(t.target.style.fill="#e74c3c",e.noPartSelected=!1):(t.target.style.fill="#ffffff",e.partClicked="",e.noPartSelected=!0),e.partClicked=e.noPartSelected?"No Part Selected":e.partNames[e.position],e.lastSelectedPart=t.target},e.controllerInit()}])}();