export type TShift = {
  readonly id: string;
  status: string;
  started_at: string;
  finished_at: string;
}

export type TUser = {
  user_id: string;
  name: string;
  surname: string;
  date_of_birth: string;
  city: string;
  phone: string;
  request_id: string;
  status: string;
}