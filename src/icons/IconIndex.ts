// BASIC ICONS
import { ArrowLeft } from './tsx/arrows/ArrowLeft'
import { ArrowRight } from './tsx/arrows/ArrowRight'
import { ArrowUp } from './tsx/arrows/ArrowUp'
import { ArrowDown } from './tsx/arrows/ArrowDown'
import { ChevronDown } from './tsx/chevrons/ChevronDown'
import { ChevronLeft } from './tsx/chevrons/ChevronLeft'
import { ChevronRight } from './tsx/chevrons/ChevronRight'
import { ChevronUp } from './tsx/chevrons/ChevronUp'
import { Check } from './tsx/controls/Check'
import { Copy } from './tsx/controls/Copy'
import { Delete } from './tsx/controls/Delete'
import { Edit } from './tsx/controls/Edit'
import { Heart } from './tsx/controls/Heart'
import { Minus } from './tsx/controls/Minus'
import { Pause } from './tsx/controls/Pause'
import { Play } from './tsx/controls/Play'
import { Plus } from './tsx/controls/Plus'
import { Stop } from './tsx/controls/Stop'
import { LinkDownload } from './tsx/link/LinkDownload'
import { LinkExternal } from './tsx/link/LinkExternal'
import { LinkUpload } from './tsx/link/LinkUpload'
import { Search } from './tsx/magnifier/Search'
import { ZoomIn } from './tsx/magnifier/ZoomIn'
import { ZoomOut } from './tsx/magnifier/ZoomOut'
import { Alert } from './tsx/misc/Alert'
import { Filter } from './tsx/misc/Filter'
import { Filtering } from './tsx/misc/Filtering'
import { Globe } from './tsx/misc/Globe'
import { Info } from './tsx/misc/Info'
import { Star } from './tsx/misc/Star'
import { Clock } from './tsx/misc/Clock'
import { Blank } from './tsx/nav/Blank'
import { Burger } from './tsx/nav/Burger'
import { Close } from './tsx/nav/Close'
import { TemplateIcon } from './tsx/nav/TemplateIcon'
import { Facebook } from './tsx/social/Facebook'
import { Instagram } from './tsx/social/Instagram'
import { Linkedin } from './tsx/social/Linekdin'
import { Share } from './tsx/social/Share'
import { Twitter } from './tsx/social/Twitter'
import { Phone } from './tsx/screens/Phone'
import { Tablet } from './tsx/screens/Tablet'
import { Desktop } from './tsx/screens/Desktop'
import { Reload } from './tsx/controls/Reload'

export interface IBasicIcon {
    stroke?: string
    fill?: string
}

export const icons = {
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    ArrowDown,

    ChevronLeft,
    ChevronRight,
    ChevronUp,
    ChevronDown,

    ControlsCheck: Check,
    ControlsMinus: Minus,
    ControlsPause: Pause,
    ControlsPlay: Play,
    ControlsPlus: Plus,
    ControlsStop: Stop,
    ControlsDelete: Delete,
    ControlsCopy: Copy,
    ControlsHeart: Heart,
    ControlsEdit: Edit,
    ControlsReload: Reload,

    LinkDownload,
    LinkExternal,
    LinkUpload,

    MagnifierSearch: Search,
    MagnifierZoomIn: ZoomIn,
    MagnifierZoomOut: ZoomOut,

    MiscAlert: Alert,
    MiscClock: Clock,
    MiscFilter: Filter,
    MiscFiltering: Filtering,
    MiscGlobe: Globe,
    MiscInfo: Info,
    MiscStar: Star,

    NavBlank: Blank,
    NavBurger: Burger,
    NavClose: Close,
    NavTemplate: TemplateIcon,

    SocialFacebook: Facebook,
    SocialInstagram: Instagram,
    SocialLinkedin: Linkedin,
    SocialShare: Share,
    SocialTwitter: Twitter,

    ScreenPhone: Phone,
    ScreenTablet: Tablet,
    ScreenDesktop: Desktop,
}
