import { BaseEmployee, IManageEmployee } from "../task_1";
import { EmployeeDivision } from "../empoyee-separate.enum";

/**
 * Определите для каждого типа из EmployeeDivision
 * класс работника определенного отдела, который унаследован от класса BaseEmployee.
 * Реализуйте необходимые методы.
 */

export class ITEmployee extends BaseEmployee{
    constructor(fullName: string) {
        super(fullName, EmployeeDivision.IT);
    }

    public override getAuthority(): void {
        console.log("Пишу код");
    }
}

export class Calculus extends BaseEmployee{
    constructor(fullName: string) {
        super(fullName, EmployeeDivision.calculus);
    }

    public override getAuthority(): void {
        console.log("Считаю зарплату");
    }
}

export class Manager extends BaseEmployee implements IManageEmployee{
    constructor(fullName: string) {
        super(fullName, EmployeeDivision.management);
    }

    public override getAuthority() {
        console.log("Управляю людьми");
    }

    public subordinates: Map<EmployeeDivision, BaseEmployee[]> = new Map();

    public addSubordinate(person: BaseEmployee): void {
        this.subordinates.get(person.getDepartment()).push(person);
    }

    public getSubordinates(flatOutput?: boolean): void {
        if (flatOutput){
            console.log(this.subordinates.values());
        }else{
            console.log(this.subordinates.entries());
        }
    }

    public removeSubordinate(person: BaseEmployee): void {
        const index = this.subordinates.get(person.getDepartment()).indexOf(person);
        this.subordinates.get(person.getDepartment()).splice(index, 1);
    }
}

export class Administrator extends BaseEmployee implements IManageEmployee {
    constructor(fullName: string) {
        super(fullName, EmployeeDivision.administration);
    }

    public override getAuthority() {
        console.log("Управляю управляющими");
    }

    public subordinates: Map<EmployeeDivision, BaseEmployee[]> = new Map();

    public addSubordinate(person: BaseEmployee): void {
        this.subordinates.get(person.getDepartment()).push(person);
    }

    public getSubordinates(flatOutput?: boolean): void {
        if (flatOutput) {
            console.log(this.subordinates.values());
        } else {
            console.log(this.subordinates.entries());
        }
    }

    public removeSubordinate(person: BaseEmployee): void {
        const index = this.subordinates.get(person.getDepartment()).indexOf(person);
        this.subordinates.get(person.getDepartment()).splice(index, 1);
    }
}