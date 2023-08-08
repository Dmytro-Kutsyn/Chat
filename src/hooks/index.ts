import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { TAppDispatch } from '../redux/store';

// REACT HOOKS :
export {
  useEffect, useState, useMemo, useContext,
} from 'react';
// REDUX HOOKS :
export const useAppDispatch = (): TAppDispatch => useDispatch<TAppDispatch>();
export const useAppSelector: any = useSelector;

// ROUTER HOOKS
export { useLocation, useHistory } from 'react-router-dom';
