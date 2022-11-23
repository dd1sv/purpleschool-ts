interface Fetcher{
    sum: number,
    from: number,
    to: number
}

const fectanswer: Fetcher = {
	"sum": 10000,
	"from": 2,
	"to": 4
}

interface IFetcher extends Fetcher {

}

enum PaymentStatus {
    Success = 'success',
    Falied = 'falied',
}

// interface IDataSuccess {
//     databaseId: number;
//     sum: number;
//     from: number;
//     to:number;
// }

// interface IDataFalied {
//     errorMessage: number;
//     errorCode: number;
   
// }


// interface IResponse {
//     status: PaymentStatus;
//     data: IDataFalied | IDataSuccess
// }

interface IDataSuccess extends Fetcher {
    databaseId: number;
  
}

interface IDataFalied {
    errorMessage: number;
    errorCode: number;
   
}


interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IDataSuccess
}

interface IResponseFalied {
    status: PaymentStatus.Falied;
    data: IDataFalied
}

function get(): IResponseFalied | IResponseSuccess{

}