export class Utils {

    public static groupBy(xs: any[], key: any): any[] {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };

    public static sortBy(data: any[], sortfield: string): any[] {
        if (data && data.length) {
            return data.sort((a, b) => {
                if (a[sortfield] === '' || a[sortfield] === null) return 1;
                if (b[sortfield] === '' || b[sortfield] === null) return -1;
                if (a[sortfield] === b[sortfield]) return 0;
                return a[sortfield] < b[sortfield] ? -1 : 1;
            });
        } else {
            return [];
        }
    }
}
