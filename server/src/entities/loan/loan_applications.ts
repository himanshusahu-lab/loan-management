//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('loan_applications')
export class loan_applications {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'dob', nullable: false, type: 'text', primary: false })
  dob: string;
  @Column({ name: 'gender', nullable: false, type: 'text', primary: false })
  gender: string;
  @Column({ name: 'mobile', nullable: false, type: 'text', primary: false })
  mobile: string;
  @Column({ name: 'email', nullable: false, type: 'text', primary: false })
  email: string;
  @Column({ name: 'address', nullable: false, type: 'text', primary: false })
  address: string;
  @Column({
    name: 'employment_type',
    nullable: false,
    type: 'text',
    primary: false,
  })
  employment_type: string;
  @Column({
    name: 'employer_name',
    nullable: false,
    type: 'text',
    primary: false,
  })
  employer_name: string;
  @Column({
    name: 'monthly_income',
    nullable: false,
    type: 'text',
    primary: false,
  })
  monthly_income: string;
  @Column({ name: 'loan_type', nullable: false, type: 'text', primary: false })
  loan_type: string;
  @Column({
    name: 'loan_amount',
    nullable: false,
    type: 'text',
    primary: false,
  })
  loan_amount: string;
  @Column({
    name: 'loan_tenure',
    nullable: false,
    type: 'text',
    primary: false,
  })
  loan_tenure: string;
  @Column({
    name: 'credit_score',
    nullable: false,
    type: 'text',
    primary: false,
  })
  credit_score: string;
  @Column({
    name: 'purpose_of_loan',
    nullable: false,
    type: 'text',
    primary: false,
  })
  purpose_of_loan: string;
  @Column({ name: 'status', nullable: false, type: 'text', primary: false })
  status: string;
  @Column({
    name: 'application_id',
    nullable: false,
    type: 'text',
    primary: false,
  })
  application_id: string;
  @Column({
    name: 'applicant_name',
    nullable: false,
    type: 'text',
    primary: false,
  })
  applicant_name: string;
  @Column({
    name: 'interest_rate',
    nullable: false,
    type: 'text',
    primary: false,
  })
  interest_rate: string;
  @Column({ name: 'emi', nullable: false, type: 'text', primary: false })
  emi: string;
  @Column({
    name: 'debt_to_income_ratio',
    nullable: false,
    type: 'text',
    primary: false,
  })
  debt_to_income_ratio: string;
  @Column({
    name: 'risk_category',
    nullable: false,
    type: 'text',
    primary: false,
  })
  risk_category: string;
  @Column({ name: 'remarks', nullable: false, type: 'text', primary: false })
  remarks: string;
}
