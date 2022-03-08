let num = 20;
    function showFirstMes (text) {
        console.log(text);
        let num = 10;
        console.log (num);
    }
        showFirstMes('Hello Ukraine');
        console.log (num);

        function calc (a, b){
            return (a + b);
        }
        console.log(calc(4, 3));
    
        function ret(){
            let num = 15;
            return num;
        }
        const anotherNum = ret();
        console.log (anotherNum);

        const logger = function(){
            console.log("Ukraine");
        };
        logger();

        const calc1 = (a, b) => a + b;

        const str = ("Test");
        const arr = [1, 4, 8];
        console.log(str.length);
        console.log(arr.length);
        console.log(str[2]);
        console.log(str.toUpperCase());
        console.log(str);
        
        const fruit = "Some fruit";
        console.log(fruit.indexOf("i"));
        console.log(fruit.slice(4,10));

        const num11 = 12.2;
        console.log(Math.round(num11));

        const pxx = "12.3px";
        console.log(parseInt(pxx));