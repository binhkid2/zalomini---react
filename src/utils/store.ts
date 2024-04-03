import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const favoriteProductsAtom = atomWithStorage<string[]>('favoriteProducts', []);
export const currentLangAtom = atomWithStorage<string>('currentLang', 'vi');
export const userAtom = atom({
    "name":'userName',
    'zaloId':'',
    'avatar':''
})
export const shopAtom = atom({
    "_id":'6607d39d40043c758ae9a83e',
    "name":'userName',
    'description':'description',
    'address':'address',
    'owner':'6607d13ffa1b88ec64552d16',
    'avatar':'avatar',
    'phone':123,
    'view':1,
    'askOrder':1,
    'coverImage':'coverImage',
    'createdAt':'000'
})
export const categoryAtom=atom('Other')
export const imagesAtom = atom<string[]>([]);