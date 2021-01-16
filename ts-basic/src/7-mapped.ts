type Heroes = 'Hulk' | 'Thor' | 'Capt';

type HeroProfiles = {
    [K in Heroes]: number;
};

const heroInfo: HeroProfiles = {
    Hulk: 54,
    Thor: 1000,
    Capt: 33,
};

// 실무에서는 Subset 많이 사용

type Subset<T> = {
    [K in keyof T]?: T[K];
};

// Subset을 사용했기 때문에 optional하게 사용할 수 있음
interface Person2 {
    age: number;
    name: string;
}

const ageOnly: Subset<Person2> = { age: 23 };
const ironman: Subset<Person2> = { age: 23, name: 'Tony' };
const empty: Subset<Person2> = {};

// 인터페이스 재활용
interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
}

/* STEP 1
interface UserProfileUpdate {
    username?: string;
    email?: string;
    profilePhotoUrl?: string;
}
*/

/* STEP 2
type UserProfileUpdate = {
    [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p];
};
*/

// STEP 3
type UserProfileUpdate = {
    [p in keyof UserProfile]?: UserProfile[p];
};
