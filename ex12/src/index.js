function switchCaseSequential(num){
    var answer="False";
    switch(num){
        case 1:
            answer="Low"
            break;
            case 2:
            answer="Low"
            break;
            case 3:
                answer="Low"
                break;
             case 4:
                    answer="Mid"
                    break;
             case 5:
                answer="Mid"
                 break;
             case 6:
                answer="Mid"
                break;
            case 7:
                answer="High"
                 break;
             case 8:
               answer="High"
                  break;
              case 9:
               answer="High"
                break;
                return answer;    

    }


return answer;
}

console.log(switchCaseSequential(9));
module.exports=switchCaseSequential;