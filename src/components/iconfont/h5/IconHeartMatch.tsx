/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, SVGAttributes, FunctionComponent } from 'react';
import { getIconColor } from './helper';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

const IconHeartMatch: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1280 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M301.439246 636.09697s-85.119787-390.463024 144.639639-515.838711L602.366494 46.722443l137.471656 13.631966 86.783783 70.847823 37.183907 114.431714-31.359921 24.191939-167.487581-78.719803-186.687534 27.263932-55.80786 108.991728-17.727956 132.159669 59.90385 130.751673 54.527864 84.479789-44.991887 94.015765-172.671569-132.671668z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M1155.261112 581.121107l-263.039343 260.543349-284.671288-271.359322c-51.583871-68.03183-58.431854-108.607728-58.431854-169.471576a251.199372 251.199372 0 0 1 158.463604-232.767418c27.007932 10.943973 51.90387 26.495934 73.599816 46.015885 36.799908 53.311867 149.375627-22.207944 212.09547-22.015945 140.287649 0 234.239414 78.783803 234.239414 217.471456 0 0-0.192 92.927768-72.255819 171.519571z"
        fill={getIconColor(color, 1, '#FF675F')}
      />
      <path
        d="M940.797648 214.274024c8.959978-4.287989 17.791956-8.12798 25.919935-11.007972a63.80784 63.80784 0 0 1 70.143825-1.151997c7.487981 1.535996 14.783963 3.391992 21.951945 5.759985-36.223909-37.311907-83.519791-34.751913-118.015705 6.399984z m-26.431934 46.527884c6.847983-18.047955 15.80796-33.855915 26.495934-46.527884-11.775971 5.759986-23.99994 12.287969-36.287909 18.751953a226.175435 226.175435 0 0 0-9.215977 23.679941c6.399984 0.639998 12.799968 1.919995 19.007952 4.09599z m-55.487861 0.703998c6.207984-2.239994 12.479969-3.83999 18.815953-4.607988a238.271404 238.271404 0 0 0-3.135992-8.959978 243.83939 243.83939 0 0 1-18.047955 7.487981l2.367994 6.079985z m28.799928-5.311986h0.255999c1.919995-6.079985 3.96799-12.09597 6.207985-17.855956-4.287989 2.111995-8.639978 4.351989-12.927968 6.399984 1.407996 3.711991 2.687993 7.551981 3.83999 11.519971h2.559994z"
        fill={getIconColor(color, 2, '#FF5041')}
      />
      <path
        d="M966.781583 195.458071c-18.879953 7.679981-34.751913 21.119947-45.503886 38.463904 5.887985 1.599996 11.711971 3.711991 17.279957 6.143985a77.759806 77.759806 0 0 1 128.831678 0.639998c5.567986-2.559994 11.263972-4.671988 17.151957-6.399984a96.383759 96.383759 0 0 0-47.679881-39.615901A341.311147 341.311147 0 0 0 993.661516 192.00208a126.463684 126.463684 0 0 0-26.879933 3.455991z m-311.359222 33.919916c4.479989-9.471976 10.239974-18.367954 16.959958-26.431934a21.951945 21.951945 0 0 0-10.815973-10.303975c-18.431954 12.287969-35.199912 26.943933-49.791875 43.583891 13.247967-4.543989 27.071932-6.911983 41.023897-6.975982l2.559994 0.128z m21.695946-31.871921c4.09599-4.351989 8.511979-8.447979 13.183967-12.223969a47.103882 47.103882 0 0 0-5.567986-6.399984 257.279357 257.279357 0 0 0-16.639958 9.599976 28.735928 28.735928 0 0 1 8.959977 9.023977z m-24.319939 56.511859c36.223909 0.064 69.759826 19.199952 88.255779 50.303874a126.079685 126.079685 0 0 1 18.751953-3.007992 121.087697 121.087697 0 0 0-107.007732-65.279837c-17.279957 0.064-34.431914 3.83999-50.175875 11.135972a250.879373 250.879373 0 0 0-26.111934 40.959898 102.719743 102.719743 0 0 1 76.287809-34.111915z m35.583911-19.583951c5.887985 1.727996 11.583971 3.83999 17.151957 6.399984a77.631806 77.631806 0 0 1 67.071832-34.559914 250.495374 250.495374 0 0 0-21.823945-15.93596 96.319759 96.319759 0 0 0-62.399844 44.15989z"
        fill={getIconColor(color, 3, '#FF5041')}
      />
      <path
        d="M662.718343 229.761986c6.399984 0.447999 12.607968 1.471996 18.815953 2.879992 13.439966-23.039942 35.391912-40.0639 61.183847-47.359881a251.90337 251.90337 0 0 0-21.119947-11.263972 121.279697 121.279697 0 0 0-58.879853 55.679861z m118.911703-15.679961l-0.064-0.128c-27.135932-4.479989-54.399864 7.231982-69.887825 29.951925 5.311987 2.815993 10.367974 5.887985 15.231962 9.407977a53.119867 53.119867 0 0 1 86.655783 0 128.639678 128.639678 0 0 1 15.167962-9.407977 72.319819 72.319819 0 0 0-9.215977-10.879973c-15.87196-0.767998-29.055927-6.207984-37.887905-18.943952zM626.366434 377.537616a126.079685 126.079685 0 0 1 18.879953-2.559993 121.279697 121.279697 0 0 0-78.975803-63.679841 248.767378 248.767378 0 0 0-5.887985 16.959957c27.90393 6.527984 51.83987 24.383939 65.983835 49.279877z m208.575479-136.703658c5.567986-2.559994 11.263972-4.671988 17.087957-6.399984a101.375747 101.375747 0 0 0-2.687993-4.03199 146.367634 146.367634 0 0 1-20.479949 2.687993c2.175995 2.495994 4.223989 5.055987 6.079985 7.743981z m-124.03169-69.119827a76.15981 76.15981 0 0 0-2.687994-3.519991l-0.191999-0.128c-5.759986 2.367994-11.391972 4.863988-16.959958 7.551981 1.663996 1.727996 3.199992 3.519991 4.671989 5.439986a128.639678 128.639678 0 0 1 15.167962-9.407976z m291.83927 450.110874a96.06376 96.06376 0 0 0-81.279797 45.247887c5.887985 1.727996 11.647971 3.83999 17.215957 6.335984a77.759806 77.759806 0 0 1 126.399684-2.495993l12.799968-12.671969a95.99976 95.99976 0 0 0-75.071812-36.479908z m97.791756 13.951966l9.151977-9.023978a21.951945 21.951945 0 0 0-9.151977 9.023978z"
        fill={getIconColor(color, 4, '#FF5041')}
      />
      <path
        d="M1002.813493 597.121067a121.087697 121.087697 0 0 0-107.135732 65.343837c6.399984 0.511999 12.671968 1.471996 18.943952 2.879993a102.399744 102.399744 0 0 1 168.12758-11.903971l12.799968-12.607968a120.959698 120.959698 0 0 0-92.799768-43.711891z m79.551801 21.311947c4.735988 3.83999 9.151977 7.87198 13.247967 12.287969a28.607928 28.607928 0 0 1 23.423941-13.183967l15.551962-15.359961a46.335884 46.335884 0 0 0-52.22387 16.319959z m-43.90389-22.975943c5.823985 1.727996 11.519971 3.83999 17.087957 6.399984a77.631806 77.631806 0 0 1 102.655743-23.487941c4.09599-4.543989 7.93598-9.151977 11.519972-13.887965a95.487761 95.487761 0 0 0-131.263672 30.975922z"
        fill={getIconColor(color, 5, '#FF5041')}
      />
      <path
        d="M1061.757346 604.993048c5.311987 2.751993 10.367974 5.887985 15.231962 9.343976a53.119867 53.119867 0 0 1 62.911842-17.535956l13.439967-13.375967a70.847823 70.847823 0 0 0-91.519772 21.567947z m-166.079585 201.215496c6.399984 0.447999 12.671968 1.407996 18.879953 2.815993 12.799968-21.567946 33.087917-37.695906 56.895857-45.439886l22.719944-22.399944a121.279697 121.279697 0 0 0-98.495754 65.023837z"
        fill={getIconColor(color, 6, '#FF5041')}
      />
      <path
        d="M921.469696 810.816533l1.855996 0.511999 35.327911-34.943913c-15.295962 7.93598-28.09593 19.83995-37.183907 34.431914z m-28.799928 34.559914l3.839991-7.039983a50.367874 50.367874 0 0 0-8.319979-0.959997l4.479988 7.99998z m110.079725-149.503627a21.759946 21.759946 0 0 0-19.007952 11.391972c6.911983 8.12798 12.799968 17.151957 17.471956 26.751933h0.191999l8.06398-7.93598c3.711991-6.399984 7.99998-12.543969 12.799968-18.239955a21.759946 21.759946 0 0 0-19.455951-11.96797z m9.983975-105.151737c6.335984 0.511999 12.607968 1.471996 18.815953 2.943993a102.271744 102.271744 0 0 1 142.399644-34.623914c3.583991-4.927988 7.039982-9.791976 10.111975-14.719963a120.1277 120.1277 0 0 0-171.327572 46.335884v0.064z m78.591804-358.143104a126.079685 126.079685 0 0 1 18.815953-2.879993 120.255699 120.255699 0 0 0-13.247967-20.479949 257.919355 257.919355 0 0 0-38.143905-10.879973c13.375967 8.703978 24.511939 20.479949 32.639919 34.239915zM1002.877493 646.400944c-23.039942 0-44.607888 11.199972-57.919855 30.015925 5.311987 2.687993 10.367974 5.823985 15.231962 9.279977a53.119867 53.119867 0 0 1 85.503786 0.383999 128.639678 128.639678 0 0 1 11.519971-7.359982l3.007992-2.943992a70.847823 70.847823 0 0 0-57.343856-29.375927z m123.96769-271.487321c6.399984 0.319999 12.671968 1.151997 18.879953 2.495993 14.847963-25.919935 40.1279-44.15989 69.375826-49.919875a200.831498 200.831498 0 0 0-6.655983-16.895957 121.279697 121.279697 0 0 0-81.599796 64.319839z"
        fill={getIconColor(color, 7, '#FF5041')}
      />
      <path
        d="M1152.637118 379.137612c5.887985 1.599996 11.711971 3.583991 17.279957 6.015985 11.90397-17.919955 30.719923-30.207924 51.96787-33.791915a226.815433 226.815433 0 0 0-4.607988-17.279957c-27.007932 5.119987-50.559874 21.503946-64.639839 45.055887z m-139.90365-77.823805c6.335984 0.447999 12.607968 1.471996 18.815953 2.879993a102.399744 102.399744 0 0 1 165.759586-14.527964 183.743541 183.743541 0 0 0-42.431894-48.25588 119.295702 119.295702 0 0 0-35.199912-5.311986 121.087697 121.087697 0 0 0-106.943733 65.215837z"
        fill={getIconColor(color, 8, '#FF5041')}
      />
      <path
        d="M1176.253059 388.09759c5.311987 2.623993 10.495974 5.695986 15.359962 9.023977a53.247867 53.247867 0 0 1 34.431914-21.439946 266.111335 266.111335 0 0 0-2.751993-17.663956c-19.135952 3.199992-36.09591 14.079965-47.039883 30.079925z m-35.647911-155.455612a213.887465 213.887465 0 0 0-10.495973-7.99998 285.695286 285.695286 0 0 0-2.687994 6.143985c4.415989 0.319999 8.767978 0.959998 13.183967 1.919995z m-20.863947-3.391991h0.191999c1.279997-2.687993 2.687993-5.375987 4.22399-7.93598a214.975463 214.975463 0 0 0-15.359962-7.423982c3.263992 4.927988 6.207984 10.111975 8.767978 15.423962h2.175995z m95.74376 189.055527c3.83999 4.351989 7.295982 8.959978 10.495974 13.759966 1.151997-7.487981 1.855995-14.975963 2.047995-22.527944v-1.983995a21.887945 21.887945 0 0 0-12.543969 10.751973z m-62.079845 105.023738c5.887985 1.663996 11.647971 3.711991 17.279957 6.207984 8.895978-12.991968 21.503946-22.975943 36.15991-28.607928 3.007992-7.167982 5.567986-14.207964 7.80798-20.927948a96.319759 96.319759 0 0 0-61.311846 43.327892z"
        fill={getIconColor(color, 9, '#FF5041')}
      />
      <path
        d="M1127.485181 519.041262c6.399984 0.383999 12.735968 1.279997 18.943953 2.559994a103.039742 103.039742 0 0 1 70.527824-49.023877 286.719283 286.719283 0 0 0 4.991987-18.751954 121.279697 121.279697 0 0 0-94.463764 65.215837z m49.471877 13.439967c3.647991 1.855995 7.231982 3.83999 10.687973 6.079985 5.567986-9.151977 10.623973-18.687953 15.103962-28.415929-10.239974 5.247987-19.135952 12.863968-25.791935 22.335944z m20.159949-131.327672c4.799988 3.647991 9.279977 7.679981 13.439967 11.90397a28.671928 28.671928 0 0 1 17.279956-12.607968 274.559314 274.559314 0 0 0-1.087997-17.983955 46.463884 46.463884 0 0 0-29.631926 18.687953z m-77.439806-19.647951a121.087697 121.087697 0 0 0-106.943733 65.151837c6.335984 0.511999 12.607968 1.535996 18.815953 2.943993a102.463744 102.463744 0 0 1 176.12756-0.319999c5.183987-1.151997 10.495974-1.919995 15.80796-2.431994a322.559194 322.559194 0 0 0 0.895998-4.479989 121.087697 121.087697 0 0 0-104.639738-60.799848zM887.677781 568.12914c25.407936 0 49.215877 12.351969 63.74384 33.151917 5.567986-2.495994 11.391972-4.543989 17.279957-6.207985a95.615761 95.615761 0 0 0-162.367594 0.511999c5.887985 1.791996 11.519971 3.90399 17.087957 6.463984 14.463964-21.247947 38.527904-33.919915 64.25584-33.919915z m115.199712-161.727596a21.759946 21.759946 0 0 0-19.391952 11.83997c7.423981 8.511979 13.695966 17.919955 18.623954 28.03193h3.199992c4.799988-9.727976 10.751973-18.751953 17.791955-26.943932l-0.319999 0.127999a21.759946 21.759946 0 0 0-19.90395-13.055967z"
        fill={getIconColor(color, 10, '#FF5041')}
      />
      <path
        d="M1002.813493 381.761606a46.335884 46.335884 0 0 0-37.759906 19.391951c4.799988 3.647991 9.279977 7.679981 13.439967 11.90397a28.607928 28.607928 0 0 1 49.279877 1.151997c4.15999-4.351989 8.639978-8.447979 13.375966-12.159969a46.399884 46.399884 0 0 0-38.399904-20.287949z m-115.199712 136.959657h0.319999c4.799988-10.047975 11.007972-19.455951 18.303954-27.96793a21.759946 21.759946 0 0 0-38.143904 1.599996c6.719983 8.12798 12.415969 16.959958 16.959957 26.431934h2.559994z"
        fill={getIconColor(color, 11, '#FF5041')}
      />
      <path
        d="M863.357842 486.977343a28.607928 28.607928 0 0 1 47.67988-1.343997c4.15999-4.351989 8.575979-8.319979 13.311967-12.03197a46.335884 46.335884 0 0 0-74.175814 1.151997c4.671988 3.711991 9.087977 7.80798 13.183967 12.15997z m139.455651-129.919676c-23.487941 0-45.439886 11.647971-58.623853 31.039923 5.375987 2.623993 10.495974 5.695986 15.359961 9.023977a53.119867 53.119867 0 0 1 87.039783 0.831998c4.927988-3.391992 10.047975-6.463984 15.359961-9.215977a70.847823 70.847823 0 0 0-59.135852-31.679921z m116.927708-22.207944a21.759946 21.759946 0 0 0-19.327952 11.77597c7.167982 8.511979 13.183967 17.919955 17.919955 28.09593h-0.128 1.215997c4.927988-10.623973 11.327972-20.479949 18.943953-29.375926a21.759946 21.759946 0 0 0-18.623953-10.495974z"
        fill={getIconColor(color, 12, '#FF5041')}
      />
      <path
        d="M1119.741201 310.145785a45.567886 45.567886 0 0 0-37.375907 19.96795c4.735988 3.96799 9.151977 8.319979 13.247967 12.991967a27.647931 27.647931 0 0 1 47.487881-1.215997 131.199672 131.199672 0 0 1 13.311967-12.671968 45.439886 45.439886 0 0 0-36.671908-19.071952z m-116.927708 23.551941a95.167762 95.167762 0 0 0-82.239794 49.407876c5.887985 1.727996 11.711971 3.83999 17.279956 6.399984 23.679941-37.887905 71.93582-48.319879 107.775731-23.295942 8.959978 6.271984 16.639958 14.399964 22.399944 23.935941 5.631986-2.559994 11.327972-4.799988 17.215957-6.591984a95.167762 95.167762 0 0 0-82.431794-49.919875z"
        fill={getIconColor(color, 13, '#FF5041')}
      />
      <path
        d="M1119.741201 285.441846c-23.039942 0-44.671888 11.263972-57.983855 30.079925 5.311987 2.815993 10.367974 5.951985 15.231962 9.407977a53.119867 53.119867 0 0 1 84.863787-0.831998c4.863988-3.455991 9.983975-6.527984 15.359962-9.279977a70.847823 70.847823 0 0 0-57.471856-29.311927z m-232.12742 163.327592c16.511959 0 32.06392 7.679981 42.111895 20.735948 4.927988-3.455991 10.047975-6.527984 15.359961-9.279977a70.911823 70.911823 0 0 0-115.519711 0.895998c5.247987 2.751993 10.367974 5.951985 15.167962 9.407977a53.119867 53.119867 0 0 1 42.879893-21.759946z m63.743841-136.959658c5.567986-2.431994 11.391972-4.479989 17.279956-6.207984a95.615761 95.615761 0 0 0-162.367594 0.575999c5.887985 1.727996 11.519971 3.83999 17.087958 6.399984a77.759806 77.759806 0 0 1 127.99968-0.703999z m168.319579 112.25572c25.407936 0 49.279877 12.415969 63.74384 33.215917 5.631986-2.559994 11.391972-4.607988 17.279957-6.271985a95.615761 95.615761 0 0 0-162.239594 0.447999c5.823985 1.727996 11.519971 3.83999 17.087957 6.399984 14.527964-21.119947 38.527904-33.791916 64.19184-33.791915z"
        fill={getIconColor(color, 14, '#FF5041')}
      />
      <path
        d="M895.357762 519.041262c6.399984 0.383999 12.799968 1.279997 19.007952 2.559994a102.463744 102.463744 0 0 1 177.023558 0.383999 126.079685 126.079685 0 0 1 18.815952-2.879993 120.447699 120.447699 0 0 0-214.847462-0.064z m-8.06398-144.319639c4.991988-10.623973 11.327972-20.479949 19.007952-29.311927a21.759946 21.759946 0 0 0-38.143904 1.599996c7.039982 8.447979 12.927968 17.791956 17.599956 27.711931h-0.128 1.663996z m232.447419 56.19186c-23.039942 0-44.671888 11.135972-57.983855 29.951925 5.311987 2.751993 10.367974 5.887985 15.231962 9.407976a53.119867 53.119867 0 0 1 84.863787-0.831998c4.863988-3.455991 9.983975-6.527984 15.359962-9.215977a70.847823 70.847823 0 0 0-57.471856-29.311926zM887.613781 303.361802c16.511959 0 32.06392 7.679981 42.111895 20.735948 4.927988-3.455991 10.047975-6.527984 15.359961-9.279977a70.911823 70.911823 0 0 0-115.519711 0.895998c5.247987 2.815993 10.367974 5.951985 15.167962 9.407976a53.119867 53.119867 0 0 1 42.879893-21.759945z"
        fill={getIconColor(color, 15, '#FF5041')}
      />
      <path
        d="M780.606048 446.721443c6.399984 0.575999 12.607968 1.535996 18.815953 3.007993a102.463744 102.463744 0 0 1 176.12756-0.447999 126.079685 126.079685 0 0 1 19.007953-2.751993 120.447699 120.447699 0 0 0-213.887466 0.191999z m82.751794-105.151737a28.607928 28.607928 0 0 1 47.67988-1.343997c4.15999-4.351989 8.575979-8.319979 13.311967-12.031969a46.335884 46.335884 0 0 0-74.175814 1.151997c4.671988 3.775991 9.087977 7.80798 13.183967 12.223969z"
        fill={getIconColor(color, 16, '#FF5041')}
      />
      <path
        d="M887.677781 424.0655c25.343937 0 49.151877 12.415969 63.679841 33.215917 5.567986-2.559994 11.391972-4.607988 17.279956-6.271985a95.615761 95.615761 0 0 0-162.367594 0.575999c5.887985 1.727996 11.519971 3.90399 17.087958 6.463984 14.463964-21.247947 38.527904-33.919915 64.255839-33.919915z m232.06342-145.407637c25.343937 0 49.151877 12.415969 63.67984 33.215917 5.631986-2.495994 11.391972-4.607988 17.279957-6.271984a95.615761 95.615761 0 0 0-162.239594 0.447999c5.823985 1.727996 11.519971 3.83999 17.087957 6.399984 14.527964-21.119947 38.527904-33.791916 64.19184-33.791916zM695.678261 470.529384c4.799988-3.519991 9.855975-6.655983 15.167962-9.407977a70.911823 70.911823 0 0 0-115.711711-0.639998c5.311987 2.687993 10.431974 5.759986 15.359962 9.215977a53.119867 53.119867 0 0 1 85.119787 0.831998z m74.495814-95.615761a53.119867 53.119867 0 0 1 43.96789 23.295941 128.639678 128.639678 0 0 1 15.231962-9.279976 70.911823 70.911823 0 0 0-118.399704 0c5.247987 2.751993 10.367974 5.823985 15.167962 9.279976a53.119867 53.119867 0 0 1 44.03189-23.295941z m0 71.359821h2.943992c4.799988-9.791976 10.879973-18.943953 18.047955-27.199932l-1.087997 0.447999a21.759946 21.759946 0 0 0-39.871901 0l-1.023997-0.447999c7.103982 8.319979 13.183967 17.407956 17.983955 27.263932h3.007993z"
        fill={getIconColor(color, 17, '#FF5041')}
      />
      <path
        d="M770.238074 399.553561c10.431974 0 20.09595 5.759986 25.087938 14.975963 4.15999-4.351989 8.639978-8.447979 13.439966-12.22397a46.335884 46.335884 0 0 0-77.055807 0c4.735988 3.775991 9.215977 7.87198 13.439966 12.22397a28.607928 28.607928 0 0 1 25.087937-14.975963z"
        fill={getIconColor(color, 18, '#FF5041')}
      />
      <path
        d="M770.238074 325.569746a102.911743 102.911743 0 0 1 89.343777 52.351869 126.079685 126.079685 0 0 1 18.751953-2.879993 120.447699 120.447699 0 0 0-216.255459 0c6.335984 0.447999 12.607968 1.407996 18.751953 2.815993a102.911743 102.911743 0 0 1 89.407776-52.287869z"
        fill={getIconColor(color, 19, '#FF5041')}
      />
      <path
        d="M770.238074 350.273684c26.431934 0 51.071872 13.439966 65.343837 35.647911 5.567986-2.495994 11.263972-4.607988 17.151957-6.271984a95.679761 95.679761 0 0 0-165.119587 0c5.887985 1.663996 11.647971 3.83999 17.215957 6.271984a77.631806 77.631806 0 0 1 65.407836-35.647911z m349.439127 105.279737c-14.719963 0-28.543929 7.039982-37.311907 18.879953 4.735988 3.775991 9.151977 7.87198 13.247967 12.223969a28.543929 28.543929 0 0 1 47.423881-1.087997c4.15999-4.287989 8.639978-8.319979 13.311967-12.03197a46.335884 46.335884 0 0 0-36.607908-17.919955z m-442.558894 31.359922c4.09599-4.351989 8.511979-8.447979 13.183967-12.22397a46.335884 46.335884 0 0 0-74.303814-0.895997c4.671988 3.711991 9.151977 7.743981 13.247967 12.095969a28.543929 28.543929 0 0 1 47.87188 1.087998z"
        fill={getIconColor(color, 20, '#FF5041')}
      />
      <path
        d="M652.798368 480.257359a21.759946 21.759946 0 0 0-18.751953 10.879973c7.167982 8.383979 13.247967 17.727956 18.047955 27.711931h3.199992c4.607988-9.535976 10.303974-18.367954 17.023957-26.495934a21.759946 21.759946 0 0 0-19.519951-12.159969z m0-56.191859c25.727936 0 49.791876 12.735968 64.255839 33.919915 5.567986-2.559994 11.263972-4.671988 17.151957-6.399984a95.615761 95.615761 0 0 0-162.431593-0.447999c5.887985 1.663996 11.647971 3.83999 17.279956 6.271984 14.463964-20.863948 38.335904-33.279917 63.743841-33.279916z m19.519951-77.119807a21.759946 21.759946 0 0 0-38.335904-1.279997c7.551981 8.767978 13.823965 18.559954 18.687953 29.055927h2.111995-0.128c4.671988-9.983975 10.623973-19.327952 17.663956-27.77593zM1002.813493 262.401904a21.759946 21.759946 0 0 0-18.943953 11.007972c7.231982 8.319979 13.375967 17.599956 18.175955 27.519932h3.199992c4.671988-9.407976 10.367974-18.239954 17.151957-26.239935a21.759946 21.759946 0 0 0-19.583951-12.287969z"
        fill={getIconColor(color, 21, '#FF5041')}
      />
      <path
        d="M1002.813493 237.697966a46.335884 46.335884 0 0 0-37.119907 18.559953c4.735988 3.647991 9.215977 7.679981 13.439966 11.96797a28.543929 28.543929 0 0 1 48.06388 1.087998c4.15999-4.351989 8.639978-8.511979 13.311967-12.22397a46.335884 46.335884 0 0 0-37.759906-19.391951z"
        fill={getIconColor(color, 22, '#FF5041')}
      />
      <path
        d="M1002.813493 230.913983a53.119867 53.119867 0 0 1 43.135892 22.143944c4.863988-3.455991 9.983975-6.591984 15.231962-9.343976a70.847823 70.847823 0 0 0-116.287709-0.639999c5.311987 2.623993 10.431974 5.759986 15.359961 9.087978a53.119867 53.119867 0 0 1 42.559894-21.247947z m-108.09573 143.99964c6.399984 0.383999 12.671968 1.279997 18.943953 2.559993a102.463744 102.463744 0 0 1 178.431554 0.32 126.079685 126.079685 0 0 1 18.815953-2.751994 120.447699 120.447699 0 0 0-216.12746-0.063999z m-217.599456-33.343917c4.09599-4.415989 8.511979-8.511979 13.183967-12.287969a46.335884 46.335884 0 0 0-74.303814-0.895998c4.671988 3.711991 9.151977 7.743981 13.247967 12.09597a28.543929 28.543929 0 0 1 47.87188 1.087997z"
        fill={getIconColor(color, 23, '#FF5041')}
      />
      <path
        d="M780.606048 304.321799c6.399984 0.575999 12.607968 1.599996 18.815953 3.199992 28.799928-51.007872 91.583771-67.90383 140.35165-37.759905 14.719963 9.087977 27.007932 21.887945 35.83991 37.183907a120.959698 120.959698 0 0 1 18.943953-2.815993c-30.591924-61.759846-103.295742-85.823785-162.303595-53.823866a123.327692 123.327692 0 0 0-51.583871 54.015865z m-127.80768-23.679941a76.799808 76.799808 0 0 1 64.255839 35.519912c5.567986-2.687993 11.263972-4.991988 17.151957-6.783983-27.775931-46.975883-86.719783-61.503846-131.64767-32.511919a97.919755 97.919755 0 0 0-30.783923 32.06392c5.887985 1.727996 11.647971 3.96799 17.279956 6.591983 14.463964-21.887945 38.335904-34.879913 63.743841-34.879913z m142.015645-9.471976c4.15999-4.607988 8.575979-8.831978 13.311967-12.799968a45.055887 45.055887 0 0 0-75.775811 0c4.671988 3.96799 9.151977 8.19198 13.247967 12.799968a27.83993 27.83993 0 0 1 49.279877 0h-0.064z"
        fill={getIconColor(color, 24, '#FF5041')}
      />
      <path
        d="M695.678261 325.121747a128.639678 128.639678 0 0 1 15.231962-9.407976 70.911823 70.911823 0 0 0-115.711711-0.639999c5.311987 2.687993 10.431974 5.759986 15.359962 9.215977a53.119867 53.119867 0 0 1 85.119787 0.831998z m74.559813-24.255939h2.943993c4.479989-9.279977 10.239974-17.919955 16.831958-25.855936a21.759946 21.759946 0 0 0-39.551901 0c6.655983 7.93598 12.287969 16.639958 16.831958 25.855936h2.943992zM677.118307 631.040982c4.09599-4.351989 8.511979-8.511979 13.183967-12.223969a46.271884 46.271884 0 0 0-49.791875-17.407957l17.471956 16.639959a28.671928 28.671928 0 0 1 19.135952 12.991967z m93.119767 33.407917a53.119867 53.119867 0 0 1 42.687894 21.439946c4.863988-3.455991 9.919975-6.527984 15.231962-9.279977a70.847823 70.847823 0 0 0-112.831718-3.96799l12.927967 12.35197a53.119867 53.119867 0 0 1 41.983895-20.543949z"
        fill={getIconColor(color, 25, '#FF5041')}
      />
      <path
        d="M770.238074 615.041022c36.223909 0.064 69.759826 19.199952 88.19178 50.367874a126.079685 126.079685 0 0 1 18.879953-2.943992 120.319699 120.319699 0 0 0-197.759506-23.99994l12.927968 12.351969a102.783743 102.783743 0 0 1 77.759805-35.83991z"
        fill={getIconColor(color, 26, '#FF5041')}
      />
      <path
        d="M770.238074 639.680961c25.599936 0 49.663876 12.607968 64.12784 33.791915 5.567986-2.559994 11.327972-4.607988 17.215957-6.335984a95.551761 95.551761 0 0 0-154.175615-11.647971l12.991968 12.351969c14.719963-17.855955 36.671908-28.15993 59.83985-28.159929zM652.798368 592.769078a53.119867 53.119867 0 0 1 42.879893 21.759946c4.863988-3.455991 9.919975-6.591984 15.231962-9.343977A70.847823 70.847823 0 0 0 620.798448 582.593104l14.015965 13.375966a52.991868 52.991868 0 0 1 17.919955-3.199992z m-50.559874-207.423481c5.631986-2.431994 11.391972-4.479989 17.279957-6.079985a96.319759 96.319759 0 0 0-61.055847-44.479889c-1.535996 5.759986-2.879993 11.519971-4.03199 17.407957 19.583951 4.479989 36.735908 16.319959 47.80788 33.151917z m517.502707 94.911762a21.759946 21.759946 0 0 0-19.327952 11.775971c6.847983 8.12798 12.607968 17.151957 17.279957 26.751933h2.239994c4.863988-10.111975 11.007972-19.519951 18.367954-27.96793a21.759946 21.759946 0 0 0-18.559953-10.559974z"
        fill={getIconColor(color, 27, '#FF5041')}
      />
      <path
        d="M652.798368 543.425201c36.223909 0.128 69.759826 19.199952 88.255779 50.367875a126.079685 126.079685 0 0 1 18.751953-3.007993 120.1277 120.1277 0 0 0-170.559573-46.911883c3.071992 4.799988 6.399984 9.727976 10.047975 14.719964 16.06396-9.855975 34.559914-15.103962 53.503866-15.167963z m117.439706 145.599636c9.599976 0 18.687953 4.927988 23.935941 13.055968 4.15999-4.351989 8.575979-8.447979 13.311966-12.15997a46.335884 46.335884 0 0 0-74.239814-0.255999l12.991967 12.415969a28.607928 28.607928 0 0 1 23.99994-13.055968z m116.35171 22.527944c25.599936 0 49.663876 12.607968 64.127839 33.727916 5.567986-2.559994 11.327972-4.607988 17.215957-6.335984a95.615761 95.615761 0 0 0-162.687593 0c5.887985 1.727996 11.647971 3.83999 17.215957 6.399984 14.463964-21.183947 38.527904-33.855915 64.12784-33.791916z"
        fill={getIconColor(color, 28, '#FF5041')}
      />
      <path
        d="M789.438026 707.456791a21.759946 21.759946 0 0 0-38.143904-0.511998l23.295942 22.207944c4.15999-7.679981 9.151977-14.975963 14.847962-21.759945z m8.959978 29.759926a102.463744 102.463744 0 0 1 176.447559 0 126.079685 126.079685 0 0 1 18.943953-2.815993 120.447699 120.447699 0 0 0-214.015465-0.383999l0.511998 0.447999c6.079985 0.447999 12.15997 1.407996 18.175955 2.751993zM549.630626 402.433554a28.799928 28.799928 0 0 1 12.03197 10.879973c4.223989-4.287989 8.703978-8.319979 13.439966-11.96797a46.527884 46.527884 0 0 0-24.895938-17.791956 256.895358 256.895358 0 0 0-0.575998 18.879953z m8.06398 16.191959a22.911943 22.911943 0 0 0-7.99998-8.319979c0.064 5.759986 0.255999 11.199972 0.639998 16.639959 2.303994-2.879993 4.735988-5.631986 7.359982-8.31998z"
        fill={getIconColor(color, 29, '#FF5041')}
      />
      <path
        d="M564.798588 449.345437a102.463744 102.463744 0 0 1 176.255559 0.383999 126.079685 126.079685 0 0 1 18.751953-3.007993 120.319699 120.319699 0 0 0-208.895477-8.831978c0.255999 3.135992 0.639998 6.207984 0.959997 9.279977 4.351989 0.511999 8.703978 1.279997 12.927968 2.175995z"
        fill={getIconColor(color, 30, '#FF5041')}
      />
      <path
        d="M580.606548 397.377567c4.863988-3.391992 10.047975-6.399984 15.359962-9.087978a71.039822 71.039822 0 0 0-42.879893-29.439926 248.959378 248.959378 0 0 0-2.367994 17.855955c12.09597 3.199992 22.655943 10.495974 29.887925 20.671949z m305.983236 370.303074a21.759946 21.759946 0 0 0-19.199952 11.519971c6.911983 8.19198 12.735968 17.087957 17.407956 26.687933h3.391992c4.735988-9.599976 10.623973-18.623953 17.535956-26.815933a21.759946 21.759946 0 0 0-19.135952-11.391971zM601.598496 529.665236c5.567986-2.495994 11.327972-4.543989 17.279957-6.207985a96.319759 96.319759 0 0 0-60.15985-43.199892c2.111995 7.103982 4.607988 14.079965 7.487981 20.991948 14.335964 5.759986 26.687933 15.679961 35.391912 28.415929z"
        fill={getIconColor(color, 31, '#FF5041')}
      />
      <path
        d="M625.662436 521.729256a126.079685 126.079685 0 0 1 18.943952-2.751993 121.279697 121.279697 0 0 0-91.77577-64.831838c0.959998 6.271984 2.239994 12.479969 3.77599 18.687953 28.927928 5.631986 54.079865 23.487941 69.119828 48.895878z m-55.231862-11.007973c4.479989 9.407976 9.599976 18.559954 15.167962 27.391932 3.135992-1.919995 6.399984-3.83999 9.599976-5.439987-6.399984-9.151977-14.911963-16.639958-24.767938-21.951945z m340.03115 263.039343c4.15999-4.351989 8.575979-8.383979 13.311967-12.15997a46.335884 46.335884 0 0 0-74.431814 0.128c4.735988 3.775991 9.151977 7.80798 13.311966 12.159969a28.543929 28.543929 0 0 1 47.807881-0.127999z"
        fill={getIconColor(color, 32, '#FF5041')}
      />
      <path
        d="M929.277677 757.568666c4.799988-3.455991 9.919975-6.527984 15.231962-9.215977a70.847823 70.847823 0 0 0-115.839711 0c5.311987 2.815993 10.431974 5.887985 15.231962 9.343977a53.119867 53.119867 0 0 1 85.375787-0.064z m-64.767838 57.151857l16.703958 15.99996a101.759746 101.759746 0 0 1 21.503946 1.087997l15.103962-14.975962a118.655703 118.655703 0 0 0-53.311866-2.111995z m-6.143985-5.759985l0.192 0.063999a126.079685 126.079685 0 0 1 18.815953-2.815993 121.279697 121.279697 0 0 0-88.959778-63.99984l30.015925 28.479929c16.511959 8.895978 30.335924 22.079945 39.9359 38.207905z m-88.12778-288.639279a53.119867 53.119867 0 0 1 43.327892 22.399944c4.799988-3.455991 9.919975-6.591984 15.167962-9.343976a70.847823 70.847823 0 0 0-117.055707 0c5.311987 2.751993 10.367974 5.887985 15.231962 9.343976a53.119867 53.119867 0 0 1 43.327891-22.399944z m232.575419 31.487921a21.759946 21.759946 0 0 0-18.943953 11.071973c7.231982 8.319979 13.311967 17.535956 18.175955 27.391931h3.199992c4.671988-9.407976 10.367974-18.175955 17.151957-26.175934a21.759946 21.759946 0 0 0-19.583951-12.28797z"
        fill={getIconColor(color, 33, '#FF5041')}
      />
      <path
        d="M770.238074 504.961298c25.983935 0 50.303874 19.83995 64.639839 52.799868a104.959738 104.959738 0 0 1 17.151957-9.727976c-27.327932-68.735828-86.207784-90.751773-131.391672-49.087877-13.183967 12.15997-24.255939 28.991928-32.255919 49.087877 5.887985 2.623993 11.583971 5.887985 17.151957 9.727976 14.399964-32.959918 38.655903-52.799868 64.639839-52.799868z m232.575419-27.199932c-33.279917 0.128-63.99984 26.367934-81.535796 69.375826 5.887985 2.495994 11.711971 5.631986 17.279957 9.343977 24.319939-53.951865 72.703818-67.775831 108.159729-30.847923 8.12798 8.511979 15.167962 19.263952 20.671949 31.80792 5.567986-3.83999 11.263972-7.039982 17.151957-9.599976-17.407956-43.391892-48.383879-69.951825-81.727796-70.079824z"
        fill={getIconColor(color, 34, '#FF5041')}
      />
      <path
        d="M1002.813493 502.465304c-23.039942 0-44.671888 11.135972-57.919855 29.951925 5.311987 2.687993 10.431974 5.759986 15.359961 9.151977a53.119867 53.119867 0 0 1 85.759786 0.895998c4.799988-3.455991 9.855975-6.591984 15.167962-9.343977-13.247967-19.199952-35.071912-30.719923-58.367854-30.655923z"
        fill={getIconColor(color, 35, '#FF5041')}
      />
      <path
        d="M1002.813493 527.105242a46.335884 46.335884 0 0 0-37.119907 18.559954c4.735988 3.711991 9.215977 7.679981 13.439966 11.96797a28.543929 28.543929 0 0 1 48.06388 1.151997c4.15999-4.415989 8.639978-8.511979 13.311967-12.287969a46.335884 46.335884 0 0 0-37.759906-19.391952zM607.99848 570.305134l7.679981 7.295982a77.759806 77.759806 0 0 1 101.375746 24.511939c5.567986-2.559994 11.263972-4.735988 17.151957-6.463984a95.487761 95.487761 0 0 0-130.879672-31.487921l4.607988 6.271984 0.064-0.128z m279.679301 53.951865a21.759946 21.759946 0 0 0-19.583951 12.15997c6.591984 7.87198 12.15997 16.575959 16.639958 25.791935h3.455992c4.799988-9.919975 10.879973-19.071952 18.047954-27.391931a21.759946 21.759946 0 0 0-18.559953-10.559974z"
        fill={getIconColor(color, 36, '#FF5041')}
      />
      <path
        d="M887.677781 543.425201a102.911743 102.911743 0 0 1 87.87178 49.919876 126.079685 126.079685 0 0 1 19.007953-2.751993 120.447699 120.447699 0 0 0-213.887466 0.127999c6.335984 0.575999 12.607968 1.535996 18.751953 3.007993a102.911743 102.911743 0 0 1 88.19178-50.303875z"
        fill={getIconColor(color, 37, '#FF5041')}
      />
      <path
        d="M770.238074 470.977383c36.479909 0.064 70.271824 19.519951 88.639779 51.135872a126.079685 126.079685 0 0 1 18.815953-2.943993 120.447699 120.447699 0 0 0-214.975463 0c6.399984 0.511999 12.607968 1.471996 18.815953 2.879993a102.911743 102.911743 0 0 1 88.703778-51.071872z m117.375707 121.791695c16.511959 0 32.06392 7.679981 42.111895 20.671948 4.927988-3.455991 10.047975-6.527984 15.359961-9.215977a70.911823 70.911823 0 0 0-115.519711 0.831998c5.247987 2.815993 10.367974 6.015985 15.167962 9.535977a53.119867 53.119867 0 0 1 42.879893-21.759946z"
        fill={getIconColor(color, 38, '#FF5041')}
      />
      <path
        d="M794.814013 559.105162c4.15999-4.415989 8.575979-8.511979 13.311967-12.287969a46.335884 46.335884 0 0 0-75.775811 0c4.671988 3.775991 9.151977 7.87198 13.247967 12.287969a28.543929 28.543929 0 0 1 49.279877 0h-0.064z"
        fill={getIconColor(color, 39, '#FF5041')}
      />
      <path
        d="M770.238074 551.80918a21.759946 21.759946 0 0 0-19.83995 12.671969c6.655983 7.93598 12.287969 16.639958 16.831958 25.919935h5.951985c4.479989-9.279977 10.175975-17.983955 16.767958-25.919935a21.759946 21.759946 0 0 0-19.711951-12.671969z m256.703359 150.591624c4.15999-4.351989 8.575979-8.447979 13.311966-12.223969a46.335884 46.335884 0 0 0-74.623813-0.383999c4.671988 3.711991 9.151977 7.743981 13.247967 12.159969a28.607928 28.607928 0 0 1 48.06388 0.447999z m-115.96771-72.831818c4.15999-4.287989 8.575979-8.319979 13.311966-11.96797a46.335884 46.335884 0 0 0-74.175814 1.087997c4.671988 3.83999 9.087977 7.87198 13.247967 12.28797a28.607928 28.607928 0 0 1 47.67988-1.343997z"
        fill={getIconColor(color, 40, '#FF5041')}
      />
      <path
        d="M695.102262 532.289229L619.518451 456.641418l-62.719843 62.719844-28.863928-28.927928 91.583771-91.583771 75.647811 75.647811 68.09583-68.09583 66.559833 66.495834 77.503807-77.567806 93.119767 93.055767-28.927928 28.927928-64.191839-64.19184-77.567806 77.567806-66.495834-66.495833-68.09583 68.095829z m0 144.06364L619.518451 600.705058l-62.719843 62.719843-28.863928-28.991927 91.583771-91.519771 75.647811 75.647811L763.198092 550.401184l66.559834 66.431834 77.503806-77.567806 93.119767 93.119767-28.927928 28.863928-64.191839-64.19184-77.567806 77.631806-66.495834-66.559833-68.09583 68.159829z"
        fill={getIconColor(color, 41, '#FFFFFF')}
      />
      <path
        d="M1279.9968 425.601496c0-148.479629-121.791696-268.927328-271.99932-268.927328h-0.639998c-39.8079 0-79.103802 8.703978-115.135713 25.471937A271.93532 271.93532 0 0 0 634.686413 0.00256h-0.639998a272.831318 272.831318 0 0 0-181.183547 68.927828A269.183327 269.183327 0 0 0 271.99932 0.00256C121.791696 0.00256 0 120.386259 0 268.929888 0 334.081725 7.359982 377.601616 62.527844 450.433434l357.823105 358.399104a34.879913 34.879913 0 0 0 49.279877 0.128l84.287789-83.583791 239.807401 240.127399a34.879913 34.879913 0 0 0 49.279876 0.128L1202.556994 609.281037C1250.556874 560.897158 1279.9968 498.881313 1279.9968 425.601496zM445.182887 737.280717L113.663716 405.121547c-19.711951-26.559934-31.80792-48.447879-38.079905-68.607828-6.335984-20.15995-7.551981-40.831898-7.551981-67.711831a197.951505 197.951505 0 0 1 59.519851-141.631646 204.15949 204.15949 0 0 1 144.383639-59.135852 201.855495 201.855495 0 0 1 135.295662 51.455871l45.247887 40.703899 45.503886-40.447899a204.543489 204.543489 0 0 1 135.99966-51.775871h0.639998a204.15949 204.15949 0 0 1 144.447639 59.071852c25.983935 25.535936 44.479889 57.599856 53.439867 92.927768a277.631306 277.631306 0 0 0-6.463984 5.567986 269.183327 269.183327 0 0 0-180.863548-68.927828c-150.207624 0-271.99932 120.319699-271.99932 268.863328 0 65.215837 7.295982 108.671728 62.463844 181.567546h0.128l70.015825 70.079825-60.607849 60.09585z m704.766238-171.647571l-331.519171 328.319179-216.06346-216.447459-48.12788-48.255879L486.910783 561.921155c-19.711951-26.559934-31.80792-48.447879-38.079905-68.607828-6.271984-20.09595-7.487981-40.831898-7.487981-67.711831a197.951505 197.951505 0 0 1 59.455851-141.631646 204.15949 204.15949 0 0 1 144.383639-59.135852 201.855495 201.855495 0 0 1 135.295662 51.455871l45.311887 40.703899 8.511978-7.551982 36.991908-32.895917a204.671488 204.671488 0 0 1 135.99966-51.775871h0.639998a204.15949 204.15949 0 0 1 144.383639 59.071852c38.079905 37.311907 59.519851 88.383779 59.455852 141.695646 0 51.583871-19.455951 97.215757-57.663856 135.679661l-4.15999 4.479989z"
        fill={getIconColor(color, 42, '#333333')}
      />
    </svg>
  );
};

IconHeartMatch.defaultProps = {
  size: 96,
};

export default IconHeartMatch;
