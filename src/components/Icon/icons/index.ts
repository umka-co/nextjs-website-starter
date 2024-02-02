import { ComponentType } from 'react';
import IconNotFound from './IconNotFound';
import { AiOutlineCloseSquare, AiOutlineMenu } from 'react-icons/ai';
import { BsFillArrowRightCircleFill, BsPatchCheck } from 'react-icons/bs';
import {
  // FaRegFrown,
  // FaApple,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaFacebook,
  // FaFacebookF,
  // FaGooglePlay,
  FaHourglassHalf,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaSpinner,
} from 'react-icons/fa';
// import { FiMenu } from 'react-icons/fi';
import { IoIosCloseCircle } from 'react-icons/io';

/**
 * How to use:
 * 1. Import all required React, MUI or other SVG icons into this file.
 * 2. Add icons with "unique lowercase names" into ICONS object. Lowercase is a must!
 * 3. Use icons everywhere in the App by their names in <Icon icon="xxx" /> component
 * Important: properties of ICONS object MUST be lowercase!
 * Note: You can use camelCase or UPPERCASE in the <Icon icon="someIconByName" /> component
 */
export const ICONS: Record<string, ComponentType> = {
  default: IconNotFound,
  // default: FaRegFrown,

  arrowleft: FaChevronLeft,
  arrowright: FaChevronRight,
  check: FaCheckCircle,
  checkcurly: BsPatchCheck,

  close: IoIosCloseCircle,
  facebook: FaFacebook,
  // facebookclean: FaFacebookF,
  instagram: FaInstagram,
  // instagram: AiFillInstagram,
  linkedin: FaLinkedinIn,

  loading: FaHourglassHalf,
  more: BsFillArrowRightCircleFill,

  menu: AiOutlineMenu,

  menuopen: AiOutlineMenu,
  menuclose: AiOutlineCloseSquare,

  spinner: FaSpinner,

  twitter: FaTwitter,
  youtube: FaYoutube,
};
