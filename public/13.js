webpackJsonp([13],{230:function(t,a,n){"use strict";n.d(a,"a",function(){return e});var e="tahun-ajaran"},277:function(t,a,n){var e=n(278);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n(6)("089301e2",e,!0)},278:function(t,a,n){(t.exports=n(5)(!1)).push([t.i,".actions[data-v-1c8d4d5a]{width:150px}.active td[data-v-1c8d4d5a]{background-color:#000}",""])},279:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n(27),s=n(230);a.default={name:"Index",data:function(){return{table:{},url:e.c+"/"+s.a}},methods:{getdata:function(){var t=this;t.$http.get(""+t.url).then(function(a){Vue.set(t.$data,"table",a.data)})},prev:function(){this.url=this.table.prev_page_url,this.getdata()},next:function(){this.url=this.table.next_page_url,this.getdata()},hapus:function(t){var a=this;a.$swal({title:"Apakah anda yakin menghapus Data Ini ?",text:"",type:"warning",showCancelButton:!0}).then(function(n){n.value&&a.$http.delete(a.url+"/"+t).then(function(t){a.getdata()})})},check:function(t){var a=this;a.$http.get(a.url+"/"+t+"/edit").then(function(t){a.getdata()})}},created:function(){this.getdata()}}},280:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row-fluid"},[n("router-link",{staticClass:"btn btn-sm btn-default pull-right",attrs:{to:{name:"tahun-ajaran-tambah"}}},[n("i",{staticClass:"fa fa-plus"})]),t._v(" "),n("div",{staticClass:"widget-content"},[n("table",{staticClass:"table table-bordered"},[t._m(0),t._v(" "),n("tbody",t._l(t.table.data,function(a){return n("tr",{class:{success:1==a.aktif}},[n("td",[t._v(t._s(a.tahun_ajaran))]),t._v(" "),n("td",{staticClass:"actions"},[n("router-link",{staticClass:"btn btn-sm btn-default",attrs:{to:{name:"tahun-ajaran-ubah",params:{id:a.id}}}},[n("i",{staticClass:"fa fa-pencil"})]),t._v(" "),n("a",{staticClass:"btn btn-sm btn-default",on:{click:function(n){t.check(a.id)}}},[n("i",{staticClass:"fa fa-check"})]),t._v(" "),n("a",{staticClass:"btn btn-sm btn-default",on:{click:function(n){t.hapus(a.id)}}},[n("i",{staticClass:"fa fa-trash"})])],1)])})),t._v(" "),t.table.prev_page_url||t.table.next_page_url?n("tfoot",[n("tr",[n("td",{attrs:{colspan:"4"}},[n("a",{staticClass:"btn btn-sm btn-default",attrs:{disabled:!t.table.prev_page_url},on:{click:t.prev}},[n("i",{staticClass:"fa fa-arrow-left"})]),t._v(" "),n("a",{staticClass:"btn btn-sm btn-default pull-right",attrs:{disabled:!t.table.next_page_url},on:{click:t.next}},[n("i",{staticClass:"fa fa-arrow-right"})])])])]):t._e()])])],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",[this._v("Tahun Ajaran")]),this._v(" "),a("th",[this._v("#")])])])}]}},357:function(t,a,n){var e=n(0)(n(279),n(280),!1,function(t){n(277)},"data-v-1c8d4d5a",null);t.exports=e.exports}});