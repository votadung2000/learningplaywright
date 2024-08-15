. setTimeOut(callbaclFn, timeoutValue);
--
.  -> callback hrll (nested callback)
. Promise -> thenable
. async/await

--
asyncFn1 -> output 1
    const output1 = await asyncFn1()

--
Promis.all()

const resolvedValue = Promise.all([promise1, promise2, promise3])
--> Promis.settledAll
    -> [{status: fullfield/pending/rejected,  value}, {}, {}].filter(result => 
    result.status === fullfield)
