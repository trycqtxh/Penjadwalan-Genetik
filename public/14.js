webpackJsonp([14],{227:function(t,a,s){"use strict";s.d(a,"a",function(){return n});var n="ruangan"},253:function(t,a,s){var n=s(254);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s(6)("062a7fcc",n,!0)},254:function(t,a,s){(t.exports=s(5)(!1)).push([t.i,".actions[data-v-58869016]{width:100px}",""])},255:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s(27),e=s(227);a.default={name:"Index",data:function(){return{table:{},url:n.c+"/"+e.a}},methods:{getdata:function(){var t=this;t.$http.get(""+t.url).then(function(a){Vue.set(t.$data,"table",a.data)})},prev:function(){this.url=this.table.prev_page_url,this.getdata()},next:function(){this.url=this.table.next_page_url,this.getdata()},hapus:function(t){var a=this;a.$swal({title:"Apakah anda yakin menghapus Data Ini ?",text:"",type:"warning",showCancelButton:!0}).then(function(s){s.value&&a.$http.delete(a.url+"/"+t).then(function(t){a.getdata()})})}},created:function(){this.getdata()}}},256:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row-fluid"},[s("router-link",{staticClass:"btn btn-sm btn-default pull-right",attrs:{to:{name:"ruangan-tambah"}}},[s("i",{staticClass:"fa fa-plus"})]),t._v(" "),s("div",{staticClass:"widget-content"},[s("table",{staticClass:"table table-bordered"},[t._m(0),t._v(" "),s("tbody",t._l(t.table.data,function(a){return s("tr",[s("td",[t._v(t._s(a.nama))]),t._v(" "),s("td",[t._v(t._s(a.kapasitas))]),t._v(" "),s("td",[t._v(t._s(a.jenis))]),t._v(" "),s("td",{staticClass:"actions"},[s("router-link",{staticClass:"btn btn-sm btn-default",attrs:{to:{name:"ruangan-ubah",params:{id:a.id}}}},[s("i",{staticClass:"fa fa-pencil"})]),t._v(" "),s("a",{staticClass:"btn btn-sm btn-default",on:{click:function(s){t.hapus(a.id)}}},[s("i",{staticClass:"fa fa-trash"})])],1)])})),t._v(" "),t.table.prev_page_url||t.table.next_page_url?s("tfoot",[s("tr",[s("td",{attrs:{colspan:"4"}},[s("a",{staticClass:"btn btn-sm btn-default",attrs:{disabled:!t.table.prev_page_url},on:{click:t.prev}},[s("i",{staticClass:"fa fa-arrow-left"})]),t._v(" "),s("a",{staticClass:"btn btn-sm btn-default pull-right",attrs:{disabled:!t.table.next_page_url},on:{click:t.next}},[s("i",{staticClass:"fa fa-arrow-right"})])])])]):t._e()])])],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",[this._v("Nama")]),this._v(" "),a("th",[this._v("Kapasitas")]),this._v(" "),a("th",[this._v("Jenis")]),this._v(" "),a("th",[this._v("#")])])])}]}},348:function(t,a,s){var n=s(0)(s(255),s(256),!1,function(t){s(253)},"data-v-58869016",null);t.exports=n.exports}});