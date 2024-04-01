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
    "_id":'',
    "name":'userName',
    'description':'',
    'address':'',
    'owner':'',
    'avatar':'',
    'phone':123,
    'view':1,
    'askOrder':1,
    'coverImage':'',
    'createdAt':''
})