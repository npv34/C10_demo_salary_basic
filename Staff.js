const defaultWordDay = 22;

class Staff {
    constructor(name,
                role,
                salary,
                wordDay,
                permissionDay) {
        this.name = name;
        this.role = role;
        this.salary = salary;
        this.wordDay = wordDay;
        this.permissionDay = permissionDay
    }

    getNoPermissionDay() {
        return defaultWordDay - this.wordDay - this.permissionDay
    }

    getMoneyDecreased() {
        let ratio = 1;
        switch (this.role) {
            case 'Management':
                ratio = 1.5;
                break;
            case 'Director':
                ratio = 2;
                break;
        }

        let moneyOfDay = this.salary / defaultWordDay;
        let moneyOfDayPermission = moneyOfDay * this.permissionDay;
        let moneyOfDayNotPermission = moneyOfDay * ratio * this.getNoPermissionDay();

        return this.salary - moneyOfDayPermission - moneyOfDayNotPermission
    }
}

let staff = new Staff('Hùng', 'Director', 45000000, 19, 2);
console.log('Số ngày nghỉ không phép: ' + staff.getNoPermissionDay());
console.log('Số lương thực nhân: ' + staff.getMoneyDecreased());
