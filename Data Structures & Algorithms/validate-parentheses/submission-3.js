class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length <= 1) {
            return false
        }
        const splitStr = s.split('')
        const stack = [];
        for (let i = 0; i < splitStr.length; i++) {
            switch(splitStr[i]){
                case ')':
                  if (stack.pop() !== '(') {
                    return false
                  }
                  break;
                case '}':
                  let pop = stack.pop()
                  if (pop !== '{') {
                    return false
                  }
                  break;
                case ']':
                  if (stack.pop() !== '[') {
                    return false
                  }
                  break;
                default:
                  stack.push(splitStr[i])      
            }
        }
        return stack.length === 0
    }
}
